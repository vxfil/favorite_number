import defaultAxios from 'axios';
import { useSelector } from 'react-redux';

const axios = defaultAxios.create({
  baseURL: 'http://localhost:4000/',
});

const date = useSelector((state) => state.favNumReducer.date);

export const getPiecharts = async () => {
  try {
    const response = await axios.get(`/statistic?date=${date}`);
    return response.data;
  } catch (err) {
    return console.error(err);
  }
};
