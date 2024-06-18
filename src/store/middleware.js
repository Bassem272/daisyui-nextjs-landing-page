// // src/store/middleware.js
// export const localStorageMiddleware = store => next => action => {
//     const result = next(action);
//     const state = store.getState();
//     if (typeof window !== "undefined") {
//       localStorage.setItem('user', JSON.stringify(state.user));
//     }
//     return result;
//   };
  
//   export const reHydrateStore = () => {
//     if (typeof window !== "undefined") {
//       const user = localStorage.getItem('user');
//       if (user) {
//         return { user: JSON.parse(user) }; // Re-hydrate the store with the value saved in localStorage
//       }
//     // }
//     return undefined;
//   };
  
// src/store/middleware.js
export const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
    if (typeof window !== "undefined") {
      localStorage.setItem('user', JSON.stringify(state.user));
    }
    return result;
  };
  
export const reHydrateStore = () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem('user');
      if (user) {
        return { user: JSON.parse(user) }; // Re-hydrate the store with the value saved in localStorage
      }
    }
    return undefined;
};
