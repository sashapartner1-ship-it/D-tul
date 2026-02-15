import React, { forwardRef } from 'react';

const Footer = forwardRef<HTMLElement>((_, ref) => {
    return (
        <footer
            ref={ref}
            className="footer-container"
            style={{
                width: '100%',
                minHeight: '70vh',
                backgroundColor: '#050505',
                padding: '120px 60px',
                position: 'relative',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden'
            }}
        >
            {/* Massive Graphic Logo Background - Responsive */}
            <div className="footer-large-logo glitch-effect" style={{
                position: 'absolute',
                bottom: '-2vw',
                left: '20px',
                fontSize: 'clamp(8rem, 18vw, 25rem)',
                color: '#4a0404',
                fontWeight: '400',
                lineHeight: '0.7',
                userSelect: 'none',
                pointerEvents: 'none',
                opacity: 0.3, /* Reduced opacity for less bold feel */
                zIndex: -1,
                whiteSpace: 'nowrap',
                letterSpacing: '0.05em'
            }}>
                DTUL
            </div>

            {/* Link Infrastructure */}
            <div className="footer-links-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '60px',
                width: '100%',
                position: 'relative',
                zIndex: 10
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p className="mono" style={{ fontSize: '13px', color: '#666', fontWeight: 'bold', letterSpacing: '0.1em' }}>NAVIGATION</p>
                    {[{ label: 'WORK', href: '/#arsenal' }, { label: 'PHILOSOPHY', href: '#' }, { label: 'CONTACT', href: '/#contact' }].map(l => (
                        <a key={l.label} href={l.href} className="mono" style={{ fontSize: '14px', color: 'var(--deep-crimson)', fontWeight: 'bold', textDecoration: 'none', letterSpacing: '0.1em' }}>[ {l.label} ]</a>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p className="mono" style={{ fontSize: '13px', color: '#666', fontWeight: 'bold', letterSpacing: '0.1em' }}>RESOURCES</p>
                    {['DOCUMENTATION', 'VERSION_LOGS', 'SYSTEM_STATUS'].map(l => (
                        <a key={l} href="#" className="mono" style={{ fontSize: '14px', color: 'var(--deep-crimson)', fontWeight: 'bold', textDecoration: 'none', letterSpacing: '0.1em' }}>[ {l} ]</a>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p className="mono" style={{ fontSize: '13px', color: '#666', fontWeight: 'bold', letterSpacing: '0.1em' }}>LEGAL</p>
                    {['PRIVACY', 'TERMS', 'LICENSING'].map(l => (
                        <a key={l} href="#" className="mono" style={{ fontSize: '14px', color: 'var(--deep-crimson)', fontWeight: 'bold', textDecoration: 'none', letterSpacing: '0.1em' }}>[ {l} ]</a>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p className="mono" style={{ fontSize: '13px', color: '#666', fontWeight: 'bold', letterSpacing: '0.1em' }}>SOCIAL</p>
                    {['TWITTER/X', 'GITHUB', 'LINKEDIN'].map(l => (
                        <a key={l} href="#" className="mono" style={{ fontSize: '14px', color: 'var(--deep-crimson)', fontWeight: 'bold', textDecoration: 'none', letterSpacing: '0.1em' }}>[ {l} ]</a>
                    ))}
                </div>
            </div>

            {/* Legacy Corner Data Pinning */}
            <div className="footer-corner-data" style={{
                marginTop: '100px',
                display: 'flex',
                justifyContent: 'space-between',
                pointerEvents: 'none',
                borderTop: '1px solid #1a1a1a',
                paddingTop: '30px'
            }}>
                <div className="mono flicker-metadata" style={{ fontSize: '13px', color: 'var(--deep-crimson)', fontWeight: 'bold', letterSpacing: '0.1em' }}>
                    STATUS: TERMINATED
                </div>
                <div className="mono flicker-metadata" style={{ fontSize: '13px', color: 'var(--deep-crimson)', fontWeight: 'bold', letterSpacing: '0.1em' }}>
                    VELOCITY: 05.85
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';
export default Footer;
