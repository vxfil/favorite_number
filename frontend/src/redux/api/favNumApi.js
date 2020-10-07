import defaultAxios from 'axios';

import store from '../store';
import { SET_ERROR } from '../actions/favNumAction';

const axios = defaultAxios.create({
  baseURL: 'http://localhost:4000/',
});

export const getPiecharts = async (date) => {
  try {
    const response = await axios.get(`/statistic/?date=${date}`);
    return response.data;
  } catch (err) {
    console.error(err.response.data);
    store.dispatch({ type: SET_ERROR, payload: err.response.data });
  }
};

export const vote = async (title) => {
  try {
    const response = await axios.post('/vote', {
      title,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const logs = async () => {
  try {
    const response = await axios.get('/logs');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
