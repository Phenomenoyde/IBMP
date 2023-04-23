import { About, Hero, Especiales, Team } from './components';
import { Main } from '../../components';

import especiales from '../../settings/cms/especiales.json';
import team from '../../settings/cms/team.json';

export const Inicio = () => {
  return (
    <Main>
      <Hero />
      <Especiales data={especiales} itemWidth="400px" />
      <Team data={team} itemWidth="400px" />
      <About />
    </Main>
  );
};
