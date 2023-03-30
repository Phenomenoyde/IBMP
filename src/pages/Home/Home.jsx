import { About, Hero, Specials, Team } from './components';
import { Main } from '../../components';

import specials from '../../settings/cms/specials.json';
import team from '../../settings/cms/team.json';

export const Home = () => {
  return (
    <Main>
      <Hero />
      <Specials data={specials} itemWidth="400px" />
      <Team data={team} />
      <About />
    </Main>
  );
};
