import { createSlice } from '@reduxjs/toolkit';
import {addCar} from './carsSlice';
export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      console.log(action.payload);
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder){
    builder.addCase(addCar,(state,action)=>{
      console.log(addCar)
      state.name='';
      state.cost='';
    })
  }
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
