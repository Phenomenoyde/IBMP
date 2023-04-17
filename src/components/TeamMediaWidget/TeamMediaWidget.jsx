import teammedia from '../../settings/cms/teammedia';
import './TeamMediaWidget.css';

export const TeamMediaWidget = () => {
  return (
    <section id="TeamMediaWidget">
      <ul role="navigation">
        {teammedia.map(({ id, name, href, title, icon }) => {
          return (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              title={title}
            >
              <li role="button">
                <img className="TeamIcon" src={icon} alt={name} />
              </li>
            </a>
          );
        })}
      </ul>
    </section>
  );
};
