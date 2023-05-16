import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IContact } from 'types'

const initialState: IContact[] = []

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<IContact>) => {
      state.push(action.payload)
    },
    editContact: (state, action: PayloadAction<IContact>) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      return state.filter((contact) => contact.id !== action.payload)
    },
  },
})

export const { addContact, editContact, deleteContact } = contactSlice.actions
export default contactSlice.reducer
