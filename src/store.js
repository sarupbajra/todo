import { configureStore, createSlice } from "@reduxjs/toolkit";
import './index';
import './App';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { createStore } from 'redux';
const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

const store = configureStore({
  reducer: persistedReducer
  
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig)

export const { addTodo, removeTodo } = todoSlice.actions;
  store = createStore(persistedReducer);
// = configureStore({
//     reducer: persistedReducer,
// })
export default store;
export const persistor = persistStore(store)

