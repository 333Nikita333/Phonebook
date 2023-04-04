import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Утилита для добавления JSON Web Token
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Утилита для удаления JSON Web Token
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Запрос на регистрацию пользователя
export const userRegistration = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
};

// Запрос на авторизацию пользоваетля
export const userAuthorization = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  return data;
};

// Запрос на выход пользователя из профиля
export const userLogOut = async () => {
  await axios.post('/users/logout');
};

// Запрос на получение данных о текущем пользователе
export const userRefreshing = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

// Запрос на получение всех контактов
export const requestFetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

// Запрос на создание нового контакта
export const requestAddContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

// Запрос на удаление контакта
export const requestDeleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

// Запрос на обновление существующего контакта
export const requestUpdateContact = async contactId => {
  const { data } = await axios.patch(`/contacts/${contactId}`);
  return data;
};
