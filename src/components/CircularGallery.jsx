import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';
import './CircularGallery.css';

function debounce(func, wait) {
    let timeout; return function (...args) { clearTimeout(timeout); timeout = setTimeout(() => func.apply(this, args), wait); };
}
function lerp(p1, p2, t) { return p1 + (p2 - p1) * t; }
function autoBind(instance) {
    const proto = Object.getPrototypeOf(instance);
    Object.getOwnPropertyNames(proto).forEach(key => { if (key !== 'constructor' && typeof instance[key] === 'function') instance[key] = instance[key].bind(instance); });
}

function createTextTexture(gl, text, font = 'bold 30px sans-serif', color = '#1a0508') {
    const canvas = document.createElement('canvas'), context = canvas.getContext('2d');
    context.font = font; const metrics = context.measureText(text);
    const textWidth = Math.ceil(metrics.width), textHeight = Math.ceil(parseInt(font, 10) * 1.2);
    canvas.width = textWidth + 30; canvas.height = textHeight + 20;
    context.font = font; context.fillStyle = color; context.textBaseline = 'middle'; context.textAlign = 'center';
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    const texture = new Texture(gl, { generateMipmaps: false }); texture.image = canvas;
    return { texture, width: canvas.width, height: canvas.height };
}

class Title {
    constructor({ gl, plane, text, textColor = '#801a24', font = 'bold 24px sans-serif' }) {
        autoBind(this); this.gl = gl; this.plane = plane; this.text = text; this.textColor = textColor; this.font = font; this.createMesh();
    }
    createMesh() {
        const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
        this.mesh = new Mesh(this.gl, {
            geometry: new Plane(this.gl),
            program: new Program(this.gl, {
                vertex: `attribute vec3 position; attribute vec2 uv; uniform mat4 modelViewMatrix; uniform mat4 projectionMatrix; varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
                fragment: `precision highp float; uniform sampler2D tMap; varying vec2 vUv; void main() { vec4 color = texture2D(tMap, vUv); if (color.a < 0.1) discard; gl_FragColor = color; }`,
                uniforms: { tMap: { value: texture } }, transparent: true
            })
        });
        const aspect = width / height, textHeight = this.plane.scale.y * 0.12;
        this.mesh.scale.set(textHeight * aspect, textHeight, 1);
        this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.1;
        this.mesh.setParent(this.plane);
    }
}

class Media {
    constructor({ geometry, gl, image, index, length, renderer, scene, screen, text, viewport, bend, textColor, borderRadius = 0, font }) {
        this.extra = 0; this.geometry = geometry; this.gl = gl; this.image = image; this.index = index; this.length = length; this.renderer = renderer; this.scene = scene; this.screen = screen; this.text = text; this.viewport = viewport; this.bend = bend; this.textColor = textColor; this.borderRadius = borderRadius; this.font = font;
        this.createShader(); this.createMesh(); this.createTitle(); this.onResize();
    }
    createShader() {
        const texture = new Texture(this.gl, { generateMipmaps: true });
        this.program = new Program(this.gl, {
            depthTest: false, depthWrite: false,
            vertex: `precision highp float; attribute vec3 position; attribute vec2 uv; uniform mat4 modelViewMatrix; uniform mat4 projectionMatrix; uniform float uTime; uniform float uSpeed; varying vec2 vUv; void main() { vUv = uv; vec3 p = position; p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.08 + uSpeed * 0.3); gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
            fragment: `precision highp float; uniform vec2 uImageSizes; uniform vec2 uPlaneSizes; uniform sampler2D tMap; uniform float uBorderRadius; varying vec2 vUv; float roundedBoxSDF(vec2 p, vec2 b, float r) { vec2 d = abs(p) - b; return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r; } void main() { vec2 ratio = vec2(min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0), min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)); vec2 uv = vec2(vUv.x * ratio.x + (1.0 - ratio.x) * 0.5, vUv.y * ratio.y + (1.0 - ratio.y) * 0.5); float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius); float alpha = 1.0 - smoothstep(-0.002, 0.002, d); gl_FragColor = vec4(texture2D(tMap, uv).rgb, alpha); }`,
            uniforms: { tMap: { value: texture }, uPlaneSizes: { value: [0, 0] }, uImageSizes: { value: [0, 0] }, uSpeed: { value: 0 }, uTime: { value: 100 * Math.random() }, uBorderRadius: { value: this.borderRadius } }, transparent: true
        });
        const img = new Image(); img.crossOrigin = 'anonymous'; img.src = this.image;
        img.onload = () => { texture.image = img; this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight]; };
    }
    createMesh() { this.plane = new Mesh(this.gl, { geometry: this.geometry, program: this.program }); this.plane.setParent(this.scene); }
    createTitle() { this.title = new Title({ gl: this.gl, plane: this.plane, text: this.text, textColor: this.textColor, font: this.font }); }
    update(scroll, direction) {
        this.plane.position.x = this.x - scroll.current - this.extra;
        const x = this.plane.position.x, H = this.viewport.width / 2;
        if (this.bend === 0) { this.plane.position.y = 0; this.plane.rotation.z = 0; }
        else {
            const B_abs = Math.abs(this.bend), R = (H * H + B_abs * B_abs) / (2 * B_abs), effX = Math.min(Math.abs(x), H);
            const arc = R - Math.sqrt(R * R - effX * effX);
            this.plane.position.y = this.bend > 0 ? -arc : arc; this.plane.rotation.z = (this.bend > 0 ? -1 : 1) * Math.sign(x) * Math.asin(effX / R);
        }
        this.speed = scroll.current - scroll.last; this.program.uniforms.uTime.value += 0.03; this.program.uniforms.uSpeed.value = this.speed;
        const pOffset = this.plane.scale.x / 2, vOffset = this.viewport.width / 2;
        if (direction === 'right' && (this.plane.position.x + pOffset < -vOffset)) this.extra -= this.widthTotal;
        if (direction === 'left' && (this.plane.position.x - pOffset > vOffset)) this.extra += this.widthTotal;
    }
    onResize({ screen, viewport } = {}) {
        if (screen) this.screen = screen;
        if (viewport) this.viewport = viewport;
        this.scale = this.screen.height / 1500;
        this.plane.scale.y = (this.viewport.height * (800 * this.scale)) / this.screen.height;
        this.plane.scale.x = (this.viewport.width * (600 * this.scale)) / this.screen.width;
        this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
        this.width = this.plane.scale.x + 2.5; this.widthTotal = this.width * this.length; this.x = this.width * this.index;
    }
}

class AppEngine {
    constructor(container, { items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase }) {
        this.container = container; this.scrollSpeed = scrollSpeed; this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
        this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
        this.createRenderer(); this.createCamera(); this.createScene(); this.onResize(); this.createGeometry();
        this.createMedias(items, bend, textColor, borderRadius, font); this.update(); this.addEventListeners();
    }
    createRenderer() { this.renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio || 1, 2) }); this.gl = this.renderer.gl; this.container.appendChild(this.gl.canvas); }
    createCamera() { this.camera = new Camera(this.gl); this.camera.fov = 45; this.camera.position.z = 20; }
    createScene() { this.scene = new Transform(); }
    createGeometry() { this.planeGeometry = new Plane(this.gl, { heightSegments: 50, widthSegments: 100 }); }
    createMedias(items, bend, textColor, borderRadius, font) {
        this.mediasImages = items.concat(items);
        this.medias = this.mediasImages.map((data, index) => new Media({ geometry: this.planeGeometry, gl: this.gl, image: data.image, index, length: this.mediasImages.length, renderer: this.renderer, scene: this.scene, screen: this.screen, text: data.text, viewport: this.viewport, bend, textColor, borderRadius, font }));
    }
    onWheel(e) { this.scroll.target += (e.deltaY > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.15; this.onCheckDebounce(); }
    onCheck() { if (!this.medias || !this.medias[0]) return; const w = this.medias[0].width; this.scroll.target = (this.scroll.target < 0 ? -1 : 1) * w * Math.round(Math.abs(this.scroll.target) / w); }
    onResize() {
        this.screen = { width: this.container.clientWidth, height: this.container.clientHeight };
        this.renderer.setSize(this.screen.width, this.screen.height); this.camera.perspective({ aspect: this.screen.width / this.screen.height });
        const fov = (this.camera.fov * Math.PI) / 180, height = 2 * Math.tan(fov / 2) * this.camera.position.z;
        this.viewport = { width: height * this.camera.aspect, height };
        this.medias?.forEach(m => m.onResize({ screen: this.screen, viewport: this.viewport }));
    }
    update() {
        this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
        const dir = this.scroll.current > this.scroll.last ? 'right' : 'left';
        this.medias?.forEach(m => m.update(this.scroll, dir)); this.renderer.render({ scene: this.scene, camera: this.camera });
        this.scroll.last = this.scroll.current; this.raf = window.requestAnimationFrame(this.update.bind(this));
    }
    addEventListeners() {
        this._resize = this.onResize.bind(this); this._wheel = this.onWheel.bind(this);
        window.addEventListener('resize', this._resize); window.addEventListener('wheel', this._wheel, { passive: true });
    }
    destroy() { window.cancelAnimationFrame(this.raf); window.removeEventListener('resize', this._resize); window.removeEventListener('wheel', this._wheel); this.gl.canvas.parentNode?.removeChild(this.gl.canvas); }
}

export default function CircularGallery({ bend = 2.5, textColor = '#801a24' }) {
    const containerRef = useRef(null);

    // Custom high-vibe social items matching brand blueprint
    // FIXED STRINGS PLACEHOLDERS FOR BYPASSING REDIRECT CORS CONSTRAINTS
    const items = [
        { image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60', text: 'ALGORITHM BUSTING' },
        { image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60', text: 'VIRAL REELS FORMAT' },
        { image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&auto=format&fit=crop&q=60', text: 'SCROLL STOPPING CONTENT' },
        { image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60', text: 'CULTURAL ICON STRATEGY' }
    ];

    useEffect(() => {
        const app = new AppEngine(containerRef.current, { items, bend, textColor, borderRadius: 0.04, font: 'bold 24px sans-serif', scrollSpeed: 2, scrollEase: 0.05 });
        return () => app.destroy();
    }, []);

    return (
        <section className="gallery-outer-block">
            <div className="gallery-text-header">
                <p className="gallery-tagline">Social Media & Content</p>
                <h2 className="gallery-main-heading">CURATED CAMPAIGNS THAT OWN THE FEED</h2>
            </div>
            <div className="circular-gallery" ref={containerRef} />
        </section>
    );
}