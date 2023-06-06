import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import flatReducer from './feature/flatSlice';

export  const Store = configureStore({
    reducer:{
        flat:flatReducer,
    }
})