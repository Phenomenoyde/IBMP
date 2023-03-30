import { useState, useEffect, useRef, createElement } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Logo } from '../../components';
import { BurgerMenu } from './components';
import { useWindowResize } from '../../hooks';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import ticon from '../../assets/tijuanas-logo.ico'
import navigation from '../../settings/cms/navigation.json';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const { windowWidth } = useWindowResize();
  const { direction } = useScrollDirection();

  useEffect(() => {
    if (windowWidth > 768) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (showMenu) {
      menuRef.current?.classList.add('open');
      menuRef.current?.classList.remove('close');
    } else {
      menuRef.current?.classList.add('close');
      menuRef.current?.classList.remove('open');
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = ({ target }) => {
      if (
        (target.closest('nav#LL-HeaderMenu') === menuRef.current &&
          target.tagName !== 'A') ||
        target.closest('button#BurgerMenu') === burgerRef.current
      )
        return;
      else setShowMenu(false);
    };

    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  const menuOrientation = {
    'aria-orientation': windowWidth > 768 ? 'horizontal' : 'vertical',
    'aria-hidden': windowWidth < 768 && !showMenu ? 'true' : 'false',
  };

  const handleKeys = e => {
    switch (e.key) {
      case 'Escape':
        if (showMenu) setShowMenu(false);
        break;
      default:
        break;
    }
  };


  return (
    <header role="region" aria-label="Header Region" data-scroll={direction}>
      {windowWidth < 768 && (
        <BurgerMenu
          ref={burgerRef}
          onClick={() => setShowMenu(prev => !prev)}
          active={showMenu}
          onKeyUp={handleKeys}
          ariaControls="LL-HeaderMenu"
        />
      )}
      <Logo
        className="LL-HeaderLogo"
        src={
          ticon
        }
        height={windowWidth > 768 && windowWidth < 840 ? '50px' : '60px'}
      />

      {showMenu && (
        <nav
          id="LL-HeaderMenu"
          role="menubar"
          className="LL-Navigation fadeInLeft"
          ref={menuRef}
          {...menuOrientation}
        >
          <ul
            className="LL-NavigationMenuList fadeInLeft"
            role="menu group"
            {...menuOrientation}
          >
            {navigation.map(({ id, name, title, link, url, state }) => {
              const Element = link === 'internal' ? Link : 'a';
              const linkProps =
                Element === 'a' ? { href: url } : { to: url, state };
              return createElement(
                'li',
                { key: id, name, role: 'menuitem' },
                <Element title={title} {...linkProps}>
                  {title}
                </Element>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};
