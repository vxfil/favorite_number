import {
  SET_LOADING,
  GET_PIECHARTS,
  GET_LOGS,
  SET_DATE,
  SET_NUMBER,
  VOTE,
  SET_ERROR,
} from '../actions/favNumAction';

const initialState = {
  loading: false,
  date: '',
  currentNumber: null,
  pieCharts: [],
  message: '',
  logs: [],
  error: '',
};

export const favNumReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_DATE:
      return {
        ...state,
        date: payload,
      };
    case SET_NUMBER:
      return {
        ...state,
        currentNumber: payload,
      };
    case GET_PIECHARTS:
      return {
        ...state,
        pieCharts: payload || [],
        loading: false,
        date: '',
      };
    case VOTE:
      return {
        ...state,
        message: payload,
        loading: false,
        currentNumber: null,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
