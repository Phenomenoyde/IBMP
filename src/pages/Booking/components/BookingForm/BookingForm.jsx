import { useCallback } from 'react';
import { Textfield, Button, Select } from '../../../../components';
import './BookingForm.css';
import {
  compareDates,
  normalizeAvailability,
  validateNumber,
} from '../../../../utilities';
import { useForm } from '../../../../context';


export const BookingForm = ({ onSubmit }) => {
  const {
    state: { availableTimes, formData, formErrors, isDirty, occasions_list },
    dispatch,
  } = useForm() ?? {
    state: {
      availableTimes: [],
      formdata: {},
      formErrors: {},
      isDirty: {},
      occasions_list: [],
    },
    dispatch: () => {},
  };


  const onFocus = useCallback(
    ({ target }) => {
      dispatch({
        type: 'setIsDirty',
        payload: { [target.name]: true },
      });
    },
    [dispatch]
  );

  const onBlur = useCallback(
    ({ target }) => {
     
      const { name, value, required } = target;
      if (isDirty && value === '' && required) {
        dispatch({
          type: 'setFormErrors',
          payload: { [name]: `${name} is a required field!` },
        });
      }
    },
    [dispatch, isDirty]
  );

  const handleChange = useCallback(
    ({ target }) => {
      const { id, name, type, value, required, min, max } = target;

      
      if (type === 'number' && !validateNumber(value, min, max)) {
        switch (value) {
           case '':
            dispatch({ type: 'setFormData', payload: { [name]: value } });
            dispatch({
              type: 'setFormErrors',
              payload: {
                [name]: `Limit: ${min} - ${max} ${name}.`,
              },
            });
            break;
          default:
            return;
        }
      } else {
       
        dispatch({ type: 'setFormData', payload: { [name]: value } });
      
        if (required && value === '') {
         
          dispatch({
            type: 'setFormErrors',
            payload: { [name]: `${name} is a required field!` },
          });
        } else {
          
          dispatch({ type: 'setFormErrors', payload: { [name]: '' } });
        }
      }


      if (id === 'fecha') {
        if (!compareDates(Date.now(), value, 1)) {
          dispatch({
            type: 'setFormErrors',
            payload: { [name]: 'You need to book at least a day in advance' },
          });
        }
        dispatch({ type: 'setAvailableTimes', payload: new Date(value) });
      }
    },
    [dispatch]
  );

  return (
    <form
      id="RestBookingForm"
      onSubmit={onSubmit}
      aria-label="Tijuana's Food - Reservacion"
    >
      <Textfield
        label="Nombre"
        id="nombre"
        name="nombre"
        type="text"
        required
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.nombre ?? ''}
        errors={formErrors.nombre}
      />

      <Textfield
        label="Apellido"
        id="apellido"
        name="apellido"
        type="text"
        required
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.apellido ?? ''}
        errors={formErrors.apellido}
      />

      <Textfield
        label="Fecha"
        id="fecha"
        name="fecha"
        type="date"
        required
        max="2023-12-31"
        step="1"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.fecha ?? ''}
        errors={formErrors.fecha}
      />

      <Select
        label="Hora"
        id="hora"
        name="hora"
        required
        options={normalizeAvailability(availableTimes)}
        onFocus={onFocus}
        onBlur={onBlur}
        
        onChange={handleChange}
        value={formData?.hora ?? ''}
        errors={formErrors.hora}
      />

      <Textfield
        label="Número de Invitados"
        id="invitados"
        name="Número de Invitados"
        type="number"
        required
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.invitados ?? '1'}
        errors={formErrors.invitados}
        min="1"
        max="15"
      />

      <Select
        label="Ocasion"
        id="ocasion"
        name="ocasion"
        placeholder="Escoge una ocasión"
        dirtyPlaceholder="Ocasion"
        options={occasions_list}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.ocasion ?? ''}
        errors={formErrors.ocasion}
      />

      <Button
        id="btn-reservation"
        type="submit"
        disabled= {Object.values(formErrors).find(val => val.length > 0)}
      >
        Reserve su mesa
      </Button>
    </form>
  );
};
