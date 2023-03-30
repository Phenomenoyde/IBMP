import { faBarsStaggered, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import { Icon, Button } from '../../../../components';
import './BurgerMenu.css';

export const BurgerMenu = forwardRef(
  ({ onClick, onKeyUp, active = false, ariaControls }, ref) => {
    return (
      <Button
        unstyled
        id="BurgerMenu"
        onClick={onClick}
        onKeyUp={onKeyUp}
        ref={ref}
        ariaLabel={!active ? 'Open the Menu' : 'Close the Menu'}
        ariaControls={ariaControls}
        ariaExpanded={active}
        ariaPressed={active}
      >
        <div id="BurgerIcon">
          <Icon src={!active ? faBarsStaggered: faTimesCircle} size="2x" />
        </div>
      </Button>
    );
  }
);
