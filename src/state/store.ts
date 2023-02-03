import { configureStore } from '@reduxjs/toolkit';
import guessReducer from './guessReducer';

// store to hold all the data in the app
export const store = configureStore({
  reducer: guessReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch