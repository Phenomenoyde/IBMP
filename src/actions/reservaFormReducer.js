import { currentDateTime, fetchAPI, generateBookingID } from '../utilities';

export const STAGES = ['Detalles', 'Gracias'];
export const OCCASIONS_LIST = [
  {
    id: 1,
    label: 'Cumpleaños',
    value: 'cumpleaños',
  },
  {
    id: 2,
    label: 'Aniversario',
    value: 'aniversario',
  },
  {
    id: 3,
    label: 'Graduación',
    value: 'graduación',
  }
];

export const loadInitialState = () => ({
  availableTimes: fetchAPI(new Date()),
  formData: {
    nombre: '',
    apellido: '',
    fecha: currentDateTime(1).date,
    hora: '17:00',
    invitados: 1,
    ocasion: '',
  },
  formErrors: {
    nombre: '',
    apellido: '',
    fecha: '',
    hora: '',
    invitados: '',
    ocasion: '',
  },
  isDirty: {
    nombre: false,
    apellido: false,
    fecha: false,
    hora: false,
    invitados: false,
    ocasion: false,
  },
  stage: STAGES[0],
  occasions_list: OCCASIONS_LIST,
  booking_id: generateBookingID(),
});

const updateTimes = (state, payload) => ({
  ...state,
  availableTimes: fetchAPI(payload),
});

export const reservaFormReducer = (state, { type, payload }) => {
  switch (type) {
    case 'setAvailableTimes':
      return updateTimes(state, payload);
    case 'setFormData':
      return {
        ...state,
        formData: { ...state.formData, ...payload },
      };
    case 'setIsDirty':
      return {
        ...state,
        isDirty: { ...state.isDirty, ...payload },
      };
    case 'setFormErrors':
      return {
        ...state,
        formErrors: { ...state.formErrors, ...payload },
      };
    case 'setStage':
      return { ...state, stage: payload };
    case 'reset': {
      return { ...loadInitialState() };
    }
    default:
      break;
  }
};