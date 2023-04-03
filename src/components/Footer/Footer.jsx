import { createElement } from 'react';
import { Logo, Heading, SocialMediaWidget } from '../../components';
import { Link } from 'react-router-dom';
import navigation from '../../settings/cms/navigation.json';
import ticon from '../../assets/tijuanas-logo.ico';
import './Footer.css';

export const Footer = () => {
  return (
    <footer role="region" aria-label="Footer Section">
      <Logo
        className="FooterLogo"
        src= {ticon}
        height="100px"
      />

      <section className="RestFooterMenu">
        <Heading className="FooterNav" tag="h5" size="base">
          Navegación
        </Heading>
        <nav className="RestNavigation FooterNavigation">
          <ul>
            {navigation.map(({ id, name, title, link, url, state }) => {
              const Element = link === 'internal' ? Link : 'a';
              const linkProps =
                Element === 'a' ? { href: url } : { to: url, state };
              return createElement(
                'li',
                { key: id, name, role: 'menuitem' },
                <Element title={title} {...linkProps} className="fuuuu" style={{  color: "var(--color-primary-2)" }}>
                  {title}
                </Element>
              );
            })}
          </ul>
        </nav>
      </section>

      <section className="RestFooterContact">
        <Heading tag="h5" size="base">
          Contactos
        </Heading>
        <article>
          <p>Turmero, Edo Aragua, Venezuela</p>
          <p>+58 414-1463368</p>
          <p>TijuanasFood@gmail.com</p>
        </article>
      </section>

      <section className="RestFooterSocial">
        <Heading tag="h5" size="base">
          Redes Sociales
        </Heading>
        <nav className="RestNavigation RestFooterNavigation">
          <SocialMediaWidget />
        </nav>
      </section>
    </footer>
  );
};
