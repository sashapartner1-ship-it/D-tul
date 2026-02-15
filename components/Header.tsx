import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
    const [isWorkOpen, setIsWorkOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const navLinks = [
        { label: 'WORK', href: '/#arsenal', isDropdown: true },
        { label: 'READ', href: '/#read' },
        { label: 'CONTACT', href: '/#contact' }
    ];

    return (
        <header className="header-container" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '60px',
            borderBottom: '1px solid #4a0404',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 30px',
            zIndex: 100,
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            transition: 'opacity 0.4s ease-in-out'
        }}>
            {/* Logo Fix: nowrap and inline-block */}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="mono" style={{
                    fontSize: '1.5rem',
                    color: '#fff',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                    fontWeight: 'bold'
                }}>
                    D-TUL
                </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" style={{ gap: '30px', alignItems: 'center' }}>
                {navLinks.map((item) => (
                    <div key={item.label} style={{ position: 'relative' }}
                        onMouseEnter={() => item.isDropdown && setIsWorkOpen(true)}
                        onMouseLeave={() => item.isDropdown && setIsWorkOpen(false)}
                    >
                        <a
                            href={item.href}
                            className="mono"
                            style={{
                                fontSize: '13px',
                                color: (item.isDropdown && isWorkOpen) ? '#fff' : 'var(--deep-crimson)',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                letterSpacing: '0.2em',
                                transition: 'color 0.2s, text-shadow 0.2s',
                                padding: '10px 0',
                                display: 'block'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.textShadow = '0 0 8px var(--deep-crimson)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = (item.isDropdown && isWorkOpen) ? '#fff' : 'var(--deep-crimson)';
                                e.currentTarget.style.textShadow = 'none';
                            }}
                        >
                            {item.label}
                        </a>

                        {/* Desktop Dropdown for WORK */}
                        {item.isDropdown && isWorkOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.9)', /* Darker background */
                                backdropFilter: 'blur(10px)',
                                border: '1px solid #4a0404',
                                padding: '10px 0',
                                minWidth: '180px', /* Increased width */
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2px',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
                            }}>
                                <DropdownItem to="/first-contact" label="FIRST CONTACT" onClick={() => setIsWorkOpen(false)} />
                                <DropdownItem to="/ai-workflows" label="AI WORKFLOWS" onClick={() => setIsWorkOpen(false)} />
                                <DropdownItem to="/architecture" label="ARCHITECTURE" onClick={() => setIsWorkOpen(false)} />
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            {/* Mobile Nav Toggle */}
            <button
                className="mobile-nav-toggle mono"
                onClick={toggleMobileMenu}
                style={{
                    background: 'none',
                    border: '1px solid var(--deep-crimson)',
                    color: 'var(--deep-crimson)',
                    padding: '8px 12px',
                    fontSize: '12px',
                    cursor: 'pointer'
                }}
            >
                {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>

            {/* Mobile Fullscreen Menu */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: '60px',
                    left: 0,
                    width: '100vw',
                    height: 'calc(100vh - 60px)',
                    backgroundColor: 'rgba(0,0,0,0.95)',
                    backdropFilter: 'blur(15px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '40px',
                    zIndex: 99
                }}>
                    {navLinks.map((item) => (
                        <div key={item.label} style={{ textAlign: 'center' }}>
                            <a
                                href={item.href}
                                className="heading"
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    fontSize: '2rem',
                                    color: '#fff',
                                    textDecoration: 'none'
                                }}
                            >
                                {item.label}
                            </a>
                            {item.isDropdown && (
                                <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    <Link
                                        to="/first-contact"
                                        className="mono"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        style={{ fontSize: '14px', color: '#888', textDecoration: 'none' }}
                                    >
                                        ↳ FIRST CONTACT
                                    </Link>
                                    <Link
                                        to="/ai-workflows"
                                        className="mono"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        style={{ fontSize: '14px', color: '#888', textDecoration: 'none' }}
                                    >
                                        ↳ AI WORKFLOWS
                                    </Link>
                                    <Link
                                        to="/architecture"
                                        className="mono"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        style={{ fontSize: '14px', color: '#888', textDecoration: 'none' }}
                                    >
                                        ↳ ARCHITECTURE
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;

const DropdownItem: React.FC<{ to: string; label: string; onClick: () => void }> = ({ to, label, onClick }) => (
    <Link to={to} className="mono" style={{
        padding: '10px 20px',
        fontSize: '11px',
        color: '#888',
        textDecoration: 'none',
        display: 'block',
        whiteSpace: 'nowrap',
        transition: 'color 0.2s, background 0.2s',
        letterSpacing: '0.1em'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.backgroundColor = 'rgba(74, 4, 4, 0.2)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.color = '#888';
            e.currentTarget.style.backgroundColor = 'transparent';
        }}
        onClick={onClick}
    >
        {label}
    </Link>
);
