// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacters = (params = {}) => api.get('/character', { params });
export const getCharacterById = (id) => api.get(`/character/${id}`);
export const getLocations = (params = {}) => api.get('/location', { params });
export const getEpisodes = (params = {}) => api.get('/episode', { params });
