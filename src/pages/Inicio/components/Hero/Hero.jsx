import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '../../../../components';
import thero from '../../../../assets/banner2.png';
import './Hero.css';
export const Hero = () => {
  const navi = useNavigate();

  return (
    <section className="RestHero">
      <div className="Hero-left">
        <Heading tag="h1" size="2xl">
          Tijuana's Food
        </Heading>
        <p className="subtitle">Aragua, Venezuela</p>
        <p id="Hero-description">
          Tijuana's Food es un restaurante de comida fusión Tex-Mex. Si amas la comida picante, amarás Tijuana's Food
        </p>
        <Button
          ariaLabel="Reserve a Table"
          id="Hero-btn"
          primary
          onClick={() => navi('/bookings')}
        >
          Reserva una mesa
        </Button>
      </div>
      <div className="Hero-right">
        <img
          src= { thero }
          alt="Hero"
        />
      </div>
    </section>
  );
};
