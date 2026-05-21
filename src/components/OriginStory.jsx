import React from 'react';
import LiquidEther from './LiquidEther';
import './OriginStory.css';

const OriginStory = () => {
    return (
        <div className="origin-story-fluid-section">

            {/* LAYER 1: Interactive Smoke trail fluid vector */}
            <LiquidEther resolution={0.4} mouseForce={30} cursorSize={110} />

            {/* LAYER 2: Text Context floating above WebGL layer */}
            <div className="origin-content-container">
                <p className="origin-tagline">Making Your Brand Unignorable</p>
                <h2 className="origin-main-title">OUR JOURNEY — THE ORIGIN STORY</h2>

                <div className="origin-text-layout-grid">
                    <p className="origin-text-lead">
                        We didn't start this agency to do things the "normal" way. We started it because we saw a gap between stiff corporate strategy and actual internet culture.
                    </p>
                    <p className="origin-text-sub">
                        What began as a refusal to settle for boring marketing has turned into a full-scale creative takeover. We combined the speed of the internet with the discipline of business strategy to build a space where brands don't just survive — they thrive.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default OriginStory;