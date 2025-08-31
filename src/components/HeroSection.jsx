export function HeroSection() {
    return (
        <section style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            padding: '0 20px',
        }}>
            <div style={{ flex: 1, paddingRight: '20px' }}>
                <h2 style={{ fontSize: '2.5em', fontWeight: 'bold' }}>
                    Grow Your Indian Business with <span style={{ color: '#007bff' }}>Digital Marketing</span>
                </h2>
                <p style={{ fontSize: '1.2em' }}>
                    We help Indian businesses increase their online presence, drive qualified leads, and grow revenue through proven digital marketing strategies.
                </p>
                <div style={{ marginTop: '20px' }}>
                    <button style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        padding: '15px 30px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginRight: '10px',
                    }}>Get Free Consultation</button>

                    <button style={{
                        backgroundColor: '#6c757d',
                        color: '#fff',
                        border: 'none',
                        padding: '15px 30px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}>View Our Services</button>
                </div>
            </div>

            <img
                src="https://via.placeholder.com/400x300?text=Laptop+Image"
                alt="Laptop"
                style={{ maxWidth: '400px', flexShrink: 0 }}
            />
        </section>
    );
}
