import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';

// Параметром конфигураци для проверки сериализуемости всех actions, передаваемых
// в хранилище, и исключает из проверки actions `FLUSH`, `REHYDRATE`, `PAUSE`, `PERSIST`,
// `PURGE`, `REGISTER`.
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Параметры для persistReducer для сохранения токена из authSlice в локальное хранилище
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Глобальный стор
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
