// // src/store/index.js
// import { configureStore } from '@reduxjs/toolkit'
// import userSlice from './userSlice'
// import modalSlice from './modalSlice'
// import leftsidebarSlice from './leftSidebarSlice'
// import { localStorageMiddleware, reHydrateStore } from './middleware'

// const combinedReducer = {
//   user : userSlice,
//   modal : modalSlice,
//   leftSidebar : leftsidebarSlice,
// }

// // Configure the store with the combined reducers and middleware
// export default configureStore({
//   reducer: combinedReducer,
//   preloadedState: reHydrateStore(), // Load initial state from localStorage
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(localStorageMiddleware), // Add custom middleware
// })

// src/store/index.js
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import modalSlice from './modalSlice'
import leftsidebarSlice from './leftSidebarSlice'
import { localStorageMiddleware, reHydrateStore } from './middleware'

const combinedReducer = {
  user: userSlice,
  modal: modalSlice,
  leftSidebar: leftsidebarSlice,
}

// Configure the store with the combined reducers, initial state from localStorage, and middleware
export default configureStore({
  reducer: combinedReducer,
  preloadedState: reHydrateStore(), // Load initial state from localStorage
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware), // Add custom middleware
})
