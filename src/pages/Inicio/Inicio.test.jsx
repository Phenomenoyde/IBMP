import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Inicio } from './Inicio';

describe('components/', () => {
  describe('<Inicio />', () => {
    it('Rendered in the DOM', () => {
      render(
        <BrowserRouter>
          <Inicio />
        </BrowserRouter>
      );
      const mainEl = screen.getByRole('region');
      expect(mainEl).toBeInTheDocument();
    });
  });
});
