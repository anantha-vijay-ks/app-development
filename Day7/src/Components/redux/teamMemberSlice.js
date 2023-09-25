import { createSlice } from '@reduxjs/toolkit';

const teamMembersSlice = createSlice({
  name: 'teamMembers',
  initialState: [],
  reducers: {
    addMember: (state, action) => {
      state.push(action.payload);
    },
    updateMember: (state, action) => {
      const { id, name, role } = action.payload;
      const member = state.find((m) => m.id === id);
      if (member) {
        member.name = name;
        member.role = role;
      }
    },
    deleteMember: (state, action) => {
      return state.filter((member) => member.id !== action.payload);
    },
  },
});

export const { addMember, updateMember, deleteMember } = teamMembersSlice.actions;
export default teamMembersSlice.reducer;