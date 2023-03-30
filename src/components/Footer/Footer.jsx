import { createElement } from 'react';
import { Logo, Heading, SocialMediaWidget } from '../../components';
import { Link } from 'react-router-dom';
import navigation from '../../settings/cms/navigation.json';
import './Footer.css';

export const Footer = () => {
  return (
    <footer role="region" aria-label="Footer Section">
      <Logo
        className="FooterLogo"
        src="http://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png"
        height="100px"
      />

      <section className="LL-FooterMenu">
        <Heading className="fuuuu" tag="h5" size="base">
          Navigation
        </Heading>
        <nav className="LL-Navigation FooterNavigation">
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

      <section className="LL-FooterContact">
        <Heading tag="h5" size="base">
          Contact
        </Heading>
        <article>
          <p>Address</p>
          <p>Phone Number</p>
          <p>email</p>
        </article>
      </section>

      <section className="LL-FooterSocial">
        <Heading tag="h5" size="base">
          Social Media Links
        </Heading>
        <nav className="LL-Navigation LL-FooterNavigation">
          <SocialMediaWidget />
        </nav>
      </section>
    </footer>
  );
};
