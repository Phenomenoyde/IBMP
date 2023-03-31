import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';
import menu from '../../../../settings/cms/menu.json';

describe('components/Menu', () => {
  describe('<Menu />', () => {
    it('Rendered in the DOM', () => {
      render(<Menu data={menu} />);
      const MenuEl = screen.getByText('Menu');
      expect(MenuEl).toBeInTheDocument();
    });
  });
});
