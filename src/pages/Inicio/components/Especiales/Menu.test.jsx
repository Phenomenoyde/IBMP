import { render, screen } from '@testing-library/react';
import { Especiales } from './Especiales';
import menu from '../../../../settings/cms/menu.json';

describe('components/Especiales', () => {
  describe('<Especiales />', () => {
    it('Rendered in the DOM', () => {
      render(<Especiales data={menu} />);
      const MenuEl = screen.getByText('Especiales');
      expect(MenuEl).toBeInTheDocument();
    });
  });
});
