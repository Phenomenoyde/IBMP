import { Card, Heading } from '../../../../components';
import './Menu.css';

export const Menu = ({ data, itemWidth }) => {
  return (
    <section id="menu" className="RestMenu">
      <section className="menu-title">
        <Heading size="xl">Menú</Heading>
      </section>

      <section  id="MenuItems">
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
