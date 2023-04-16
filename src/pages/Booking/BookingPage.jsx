import { useCallback, useReducer, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Main,  Button, Icon } from '../../components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './BookingPage.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { BookingForm } from './components';
import { FormContextProvider } from '../../context';
import { submitAPI } from '../../utilities';
import { reservaFormReducer, STAGES, loadInitialState } from '../../actions';
import banner from '../../assets/banner.png'

export const BookingPage = () => {
  const location = useLocation();

  const [state, dispatch] = useReducer(reservaFormReducer, loadInitialState());

  useEffect(() => {
    if (location?.state?.from === 'navigation') dispatch({ type: 'reset' });
  }, [location?.state?.from]);

  const navigate = useNavigate();

  const goNextStage = useCallback(() => {
    const stageIndex = STAGES?.indexOf(state.stage) ?? STAGES.length;
    if (stageIndex < STAGES.length - 1) {
      dispatch({ type: 'setStage', payload: STAGES[stageIndex + 1] });
    }
    return;
  }, [state.stage]);

  const goPreviousStage = useCallback(() => {
    const stageIndex = STAGES?.indexOf(state.stage) ?? 0;
    if (stageIndex > 0) {
      dispatch({ type: 'setStage', payload: STAGES[stageIndex - 1] });
    } else {
      navigate('/');
    }
    return;
  }, [state.stage, navigate]);

  const submitForm = e => {
    e.preventDefault();
    try {
      if (Object.values(state.formErrors).find(val => val.length > 0)) {
        throw new Error('El formulario contiene errores');
      }

      const response = submitAPI({
        booking_id: state.booking_id,
        ...state.formData,
      });
      if (response) {
        goNextStage();
        navigate('Gracias');
      } else throw new Error('No se pudo enviar el formulario.');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Main>
   
      <nav className="RestBookingPageNavigation">
        {STAGES[STAGES.length - 1] !== state.stage && (
          <Button ariaLabel="Go Back" unstyled onClick={goPreviousStage}>
            <Icon src={faArrowLeft} size="2x" />
          </Button>
        )}       
      </nav>

      <FormContextProvider value={{ state, dispatch }}>
        {STAGES.indexOf(state.stage) === 0 && (
          <section className="RestBookingPageContainer">
            <section className="fadeInLeft" id="RestBookingPageHero">
              <img
                src= { banner }
                alt="Tijuana's Food"
              />
            </section>
            <BookingForm onSubmit={submitForm} />
          </section>
        )}
        <Outlet
          context={{
            data: { booking_id: state.booking_id, ...state.formData },
            stage: state.stage,
          }}
        />
      </FormContextProvider>
    </Main>
  );
};
