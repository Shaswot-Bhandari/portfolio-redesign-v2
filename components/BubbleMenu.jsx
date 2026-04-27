import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BubbleMenu.css';

const DEFAULT_ITEMS = [
  { label: 'home', href: '#', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
  { label: 'about', href: '#about', ariaLabel: 'About', rotation: 8, hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' } },
  { label: 'projects', href: '#work', ariaLabel: 'Projects', rotation: 8, hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' } },
  { label: 'skills', href: '#skills', ariaLabel: 'Skills', rotation: 8, hoverStyles: { bgColor: '#6B8CAE', textColor: '#ffffff' } },
  { label: 'contact', href: '#contact', ariaLabel: 'Contact', rotation: -8, hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' } }
];

export default function BubbleMenu({
  logo, onMenuClick, className, style,
  menuAriaLabel = 'Toggle menu',
  menuBg = 'var(--background)', menuContentColor = 'var(--foreground)',
  useFixedPosition = false, items,
  animationDuration = 0.5, staggerDelay = 0.05
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const menuItems = items?.length ? items : DEFAULT_ITEMS;
  const containerClassName = ['bubble-menu', useFixedPosition ? 'fixed' : 'absolute', className].filter(Boolean).join(' ');

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    handleResize(); // Init on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className={containerClassName} style={style} aria-label="Main navigation">
        <div className="bubble logo-bubble" aria-label="Logo" style={{ background: menuBg }}>
          <span className="logo-content">
            {typeof logo === 'string' ? <img src={logo} alt="Logo" className="bubble-logo" /> : logo}
          </span>
        </div>
        <button type="button" className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={handleToggle} aria-label={menuAriaLabel} aria-pressed={isMenuOpen} style={{ background: menuBg }}>
          <span className="menu-line" style={{ background: menuContentColor }} />
          <span className="menu-line short" style={{ background: menuContentColor }} />
        </button>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={`bubble-menu-items ${useFixedPosition ? 'fixed' : 'absolute'}`} 
            aria-hidden={!isMenuOpen}
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                display: 'flex',
                transition: { staggerChildren: staggerDelay }
              },
              closed: {
                transition: { staggerChildren: 0.02, staggerDirection: -1, when: "afterChildren" },
                transitionEnd: { display: 'none' }
              }
            }}
          >
            <ul className="pill-list" aria-label="Menu links">
              {menuItems.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  className="pill-col"
                >
                  <motion.a 
                    href={item.href} 
                    onClick={closeMenu} 
                    aria-label={item.ariaLabel || item.label} 
                    className="pill-link"
                    style={{
                      '--item-rot': `${isDesktop ? (item.rotation ?? 0) : 0}deg`,
                      '--pill-bg': menuBg, '--pill-color': menuContentColor,
                      '--hover-bg': item.hoverStyles?.bgColor || '#f3f4f6',
                      '--hover-color': item.hoverStyles?.textColor || menuContentColor
                    }}
                    variants={{
                      closed: { scale: 0, opacity: 0 },
                      open: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
                    }}
                  >
                    <motion.span 
                      className="pill-label"
                      variants={{
                        closed: { y: 20, opacity: 0 },
                        open: { y: 0, opacity: 1, transition: { duration: 0.3 } }
                      }}
                    >
                      {item.label}
                    </motion.span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
