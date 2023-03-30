import { Card, Heading } from '../../../../components';
import './Specials.css';

export const Specials = ({ data, itemWidth }) => {
  return (
    <section id="specials" className="RestSpecials">
      <section className="specials-title">
        <Heading size="lg">Specials</Heading>
      </section>

      <section  id="SpecialItems">
        {data.map(({ id, title, price, description, image }) => (
          <Card key={id} title={title} width={itemWidth} image={require(`../../../../assets/${image}`)}>
            <div className="CardHeader card-variant-food">
              <Heading tag="h3" size="m" className="food-title">
                {title}
              </Heading>
              <p className="food-price">${price}</p>
            </div>
            <div className="food-description">{description}</div>
          </Card>
        ))}
      </section>
    </section>
  );
};
