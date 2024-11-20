// src/redux/actions.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchTrendingMovies = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TRENDING_REQUEST' });
  try {
    const response = await axios.get(`${API_BASE_URL}/trending`);
    dispatch({ type: 'FETCH_TRENDING_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TRENDING_FAILURE', payload: error.message });
  }
};

export const fetchRecommendMovies = () => async (dispatch) => {
  dispatch({ type: 'FETCH_RECOMMEND_REQUEST' });
  try {
    const response = await axios.get(`${API_BASE_URL}/recommend`);
    dispatch({ type: 'FETCH_RECOMMEND_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_RECOMMEND_FAILURE', payload: error.message });
  }
};

export const fetchNewMovies = () => async (dispatch) => {
  dispatch({ type: 'FETCH_NEW_REQUEST' });
  try {
    const response = await axios.get(`${API_BASE_URL}/new`);
    dispatch({ type: 'FETCH_NEW_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_NEW_FAILURE', payload: error.message });
  }
};
