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


      if (id === 'bookingDate') {
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
      id="LL-BookingForm"
      onSubmit={onSubmit}
      aria-label="Little Lemon - Booking Form"
    >
      <Textfield
        label="What is your first name?"
        id="firstName"
        name="firstName"
        type="text"
        required
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.firstName ?? ''}
        errors={formErrors.firstName}
      />

      <Textfield
        label="And your Last Name?"
        id="lastName"
        name="lastName"
        type="text"
        required
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.lastName ?? ''}
        errors={formErrors.lastName}
      />

      <Textfield
        label="Book a Date!"
        id="bookingDate"
        name="bookingDate"
        type="date"
        required
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.bookingDate ?? ''}
        errors={formErrors.bookingDate}
      />

      <Select
        label="At what time?"
        id="bookingTime"
        name="bookingTime"
        required
        options={normalizeAvailability(availableTimes)}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.bookingTime ?? ''}
        errors={formErrors.bookingTime}
      />

      <Textfield
        label="For how many of you?"
        id="guests"
        name="guests"
        type="number"
        required
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.guests ?? '1'}
        errors={formErrors.guests}
        min="1"
        max="10"
      />

      <Select
        label="What's the occasion?"
        id="occasion"
        name="occasion"
        placeholder="Choose an Occasion"
        dirtyPlaceholder="No Special Occasion"
        options={occasions_list}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        value={formData?.occasion ?? ''}
        errors={formErrors.occasion}
      />

      <Button
        id="btn-reservation"
        type="submit"
        disabled={Object.values(formErrors).find(val => val.length > 0)}
      >
        Reserve
      </Button>
    </form>
  );
};
