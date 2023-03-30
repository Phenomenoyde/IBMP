import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '../../../../components';
import './Hero.css';

export const Hero = () => {
  const navi = useNavigate();

  return (
    <section className="RestHero">
      <div className="Hero-left">
        <Heading tag="h1" size="1xl">
          Little Lemon
        </Heading>
        <p className="subtitle">Chicago</p>
        <p id="Hero-description">
          The Little Lemon Restaurant family invites you to enjoy our mediterranean recipes.
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
          src="https://static01.nyt.com/images/2022/08/10/dining/09OFF/merlin_211195476_9a2791c8-0f0b-4bb0-9a2e-c48fd675fb17-videoSixteenByNineJumbo1600.jpg"
          alt="Hero"
        />
      </div>
    </section>
  );
};
