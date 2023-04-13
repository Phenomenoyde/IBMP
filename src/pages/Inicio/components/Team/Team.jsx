import { Card, Heading } from '../../../../components';
import './Team.css';

export const Team = ({ data }) => {
  return (
    <section id="team" className="RestTeam">
      <Heading size="xl" align="left">
        Equipo
      </Heading>
      <section className="TeamCarousel">
        {data.map(({ id, name, description, image }) => (
          <Card
            key={`team-card-${name.trim()}-${id}`}
            title={`Team by ${name}`}
            imagePosition="left"
            image={require(`../../../../assets/${image}`)}
          >
            <Heading tag="h3" size="base" className="LL-Testimonial-Name">
              {name}
            </Heading>
            <p className="Team-Rev">{description}</p>
          </Card>
        ))}
      </section>
    </section>
  );
};
