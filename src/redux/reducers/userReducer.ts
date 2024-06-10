// src/redux/salesSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userProps {
    name: string;
    email: string;
    password: string;
  }
  
  interface UserStateProps {
    userData: userProps[];
  }

  const initialState: UserStateProps = {
    userData: []
  };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDataUser: (state, action: PayloadAction<userProps[]>) => {
      state.userData = action.payload;
    }
  },
});

export const { setDataUser } = userSlice.actions;

export default userSlice.reducer;
