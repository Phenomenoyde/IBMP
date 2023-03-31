import { About, Hero, Menu, Team } from './components';
import { Main } from '../../components';

import menu from '../../settings/cms/menu.json';
import team from '../../settings/cms/team.json';

export const Inicio = () => {
  return (
    <Main>
      <Hero />
      <Menu data={menu} itemWidth="300px" />
      <Team data={team} />
      <About />
    </Main>
  );
};
