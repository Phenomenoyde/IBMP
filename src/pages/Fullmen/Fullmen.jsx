import { useCallback, useReducer, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Main,  Button, Icon } from '../../components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';
import { useNavigate } from 'react-router-dom';
import { reservaFormReducer, STAGES, loadInitialState } from '../../actions';
import { Menu } from './components/Menu'
import menu from '../../settings/cms/menu.json';


export const Fullmen = () => {
  const location = useLocation();

  const [state, dispatch] = useReducer(reservaFormReducer, loadInitialState());

  useEffect(() => {
    if (location?.state?.from === 'navigation') dispatch({ type: 'reset' });
  }, [location?.state?.from]);

  const navigate = useNavigate();

  const goPreviousStage = useCallback(() => {
    const stageIndex = STAGES?.indexOf(state.stage) ?? 0;
    if (stageIndex > 0) {
      dispatch({ type: 'setStage', payload: STAGES[stageIndex - 1] });
    } else {
      navigate('/');
    }
    return;
  }, [state.stage, navigate]);

  return (
    <Main>
   
      <nav className="RestBookingPageNavigation">
        {STAGES[STAGES.length - 1] !== state.stage && (
          <Button ariaLabel="Go Back" unstyled onClick={goPreviousStage}>
            <Icon src={faArrowLeft} size="2x" />
          </Button>
        )}       
      </nav>
      <Menu data={menu} itemWidth="300px" />

    </Main>
  );
};
