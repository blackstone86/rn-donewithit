import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  LoggedIn: boolean
}

const initialState: AuthState = {
  LoggedIn: false
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.LoggedIn = true
    },
    logout: (state) => {
      state.LoggedIn = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = auth.actions

export default auth.reducer
