import { Card, Heading } from '../../../../components';
import './Menu.css';

export const Menu = ({ data, itemWidth }) => {
  return (
    <section id="menu" className="RestMenu">
      <section className="menu-title">
        <Heading size="xl">Menú</Heading>
      </section>

      <section  id="MenuItems">
        {data.map(({ id, title, price, price2, description, image }) => (
          <Card className="fuckk" key={id} title={title} width={itemWidth} image={require(`../../../../assets/${image}`)}>
            <div className="CardHeader card-variant-food">
              <Heading tag="h4" size="m" className="food-title">
                {title}
              </Heading>

            </div>
            <div>
            <p className="food-price">${price} - {price2}</p>
            </div>
            <div className="food-description">{description}</div>
          </Card>
        ))}
      </section>
    </section>
  );
};
