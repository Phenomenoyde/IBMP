import { render, screen } from '@testing-library/react';
import { Team } from './Team';
import team from '../../../../settings/cms/team.json';

describe('components/Team', () => {
  describe('<Team />', () => {
    it('Rendered in the DOM', () => {
      render(<Team data={team} />);
      const TestimonialsEl = screen.getByText('Team');
      expect(TestimonialsEl).toBeInTheDocument();
    });
  });
});
