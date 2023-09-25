import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import teamMembersReducer from './teamMemberSlice';
import tasksReducer from './TaskSlice';
import doneTasksReducer from './doneTaskSlice'; 
import inProgressTasksReducer from './inProgressTaskSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, 
    teamMembers: teamMembersReducer,
    tasks: tasksReducer,
    doneTasks: doneTasksReducer,
    inProgressTasks: inProgressTasksReducer,
  },
});

export default store;