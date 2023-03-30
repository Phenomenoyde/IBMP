import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '../../../../components';
import './Hero.css';
import thero from '../../assets/enchiladas.jpg'
export const Hero = () => {
  const navi = useNavigate();

  return (
    <section className="RestHero">
      <div className="Hero-left">
        <Heading tag="h1" size="1xl">
          Tijuana's Food
        </Heading>
        <p className="subtitle">Chicago</p>
        <p id="Hero-description">
          Tijuana's Food is a Tex-Mex fusion restaurant in Aragua, Venezuela. If you love spicy and delicious food, you have arrived to the right place
        </p>
        <Button
          ariaLabel="Reserve a Table"
          id="Hero-btn"
          primary
          onClick={() => navi('/bookings')}
        >
          Reserve a Table
        </Button>
      </div>
      <div className="Hero-right">
        <img
          src="thero"
          alt="Hero"
        />
      </div>
    </section>
  );
};
