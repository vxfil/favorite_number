import {
  SET_LOADING,
  GET_PIECHARTS,
  VOTE,
  GET_LOGS,
} from '../actions/favNumAction';

const initialState = {
  loading: false,
  date: '',
  pieCharts: [],
  message: '',
  logs: [],
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
        payload,
      };
    case GET_PIECHARTS:
      return {
        ...state,
        pieCharts: payload,
        loading: false,
      };
    case VOTE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
      };
    default:
      return state;
  }
};
