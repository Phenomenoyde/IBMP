import { Card, Heading } from '../../../../components';
import './Testimonials.css';

export const Testimonials = ({ data }) => {
  return (
    <section id="testimonials" className="RestTestimonials">
      <Heading size="xl" align="center">
        Testimonials
      </Heading>
      <section className="Testimonials-Carousel">
        {data.map(({ id, name, review, image }) => (
          <Card
            key={`testimonial-card-${name.trim()}-${id}`}
            title={`Testimonial by ${name}`}
            imagePosition="left"
            image={image}
          >
            <Heading tag="h3" size="base" className="LL-Testimonial-Name">
              {name}
            </Heading>
            <p className="Testimonial-Rev">{review}</p>
          </Card>
        ))}
      </section>
    </section>
  );
};
