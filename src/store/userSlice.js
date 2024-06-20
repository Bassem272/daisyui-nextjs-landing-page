// // src/store/userSlice.js
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { localStorageMiddleware } from "./middleware";


// // thunk for user registration
// export const registerUser = createAsyncThunk(
//     'user/register',
//     async (userData) =>{
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/auth/create_user/', userData)
//             return response.data.payload
//         }catch (error) {
//             throw new Error(error.response.data.message)
//         }
//     }
// )

// // export const fetchUserDetail = createAsyncThunk('/user/profile', async () => {
// // 	const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/user/profile')
// // 	return response.data.payload;
// // })

// export const fetchUserDetail = createAsyncThunk(
//   "/user/profile",
//   async (credentials) => {
//     const response = await axios.post(
//       "http://127.0.0.1:8000/auth/login/",
//       credentials
//     );
//     // console.log(response);
//     return response.data.user_data;
//   }
// );

// export const headerSlice = createSlice({
//   name: "user",
//   initialState: {
//     pageTitle: "User",
//     credits: 0,
//     name: "",
//     email: "",
//     grade: "",
//     avatar_url: "",
//     user_id: "",
//     isLoggedIn: false,
//     token: null,
//     created_at: null,
//     theme: "light", // user preference
//     language: "en", // user preference
//     notificationsEnabled: true, // user preference
//     role: "user", // user role
//     lastLogin: null, // user activity
//     currentChatRoom: null, // chat specific data
//     unreadMessages: 0, // chat specific data
//     contacts: [], // user contacts
//     courses: [], // user courses
//     scrollId: new Date().getTime(),
//   },
//   reducers: {
//     setGrade: (state, action) => {
//       state.grade = action.payload;
//     },
//     setLoggedIn: (state, action) => {
//       state.isLoggedIn = action.payload;
//       if (!action.payload) {
//         state.token = null;
//         axios.defaults.headers.common["Authorization"] = null;
//       }
//     },


//     setCredits: (state, action) => {
//       state.credits = action.payload;
//     },

//     updateCredits: (state, action) => {
//       state.credits = state.credits + action.payload;
//     },

//     setScrollId: (state, action) => {
//       state.scrollId = action.payload;
//     },

//     setToken: (state, action) => {
//       state.token = action.payload;
//       localStorage.setItem("token", action.payload);

//       axios.interceptors.request.use(
//         function (config) {
//           config.headers.Authorization = `Bearer ${action.payload}`;
//           return config;
//         },
//         function (error) {
//           return Promise.reject(error);
//         }
//       );
//     },
//     setTheme: (state, action) => {
//       state.theme = action.payload;
//     },
//     setLanguage: (state, action) => {
//       state.language = action.payload;
//     },
//     setNotificationsEnabled: (state, action) => {
//       state.notificationsEnabled = action.payload;
//     },
//     setCurrentChatRoom: (state, action) => {
//       state.currentChatRoom = action.payload;
//     },
//     incrementUnreadMessages: (state) => {
//       state.unreadMessages += 1;
//     },
//     clearUnreadMessages: (state) => {
//       state.unreadMessages = 0;
//     },
//     setContacts: (state, action) => {
//       state.contacts = action.payload;
//     },
//     setCourses: (state, action) => {
//       state.courses = action.payload;
//     },

//   },



//   extraReducers: {
//     [fetchUserDetail.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchUserDetail.fulfilled]: (state, action) => {
//       console.log(action)
//       console.log(action.payload);
//       const {
//         credits,
//         name,
//         email,
//         avatar_url,
//         user_id,
//         role,
//         lastLogin,
//         grade,
//         contacts,
//         courses,
//         password,
//       } = action.payload;
//       state.credits = credits;
//       state.name = name;
//       state.password = password;
//       state.email = email;
//       state.grade = grade;
//       state.avatar_url = avatar_url;
//       state.user_id = user_id;
//       state.role = role;
//       state.courses = courses;
//       state.contacts = contacts;
//       state.lastLogin = lastLogin;
//       state.isLoading = false;
//     },
//     [fetchUserDetail.rejected]: (state) => {
//       state.isLoading = false;
//     },
//   },
// });


// // export const { setLoggedIn, setToken, setCredits, setScrollId, updateCredits } = headerSlice.actions
// export const {
//   setLoggedIn,
//   setToken,
//   setCredits,
//   setScrollId,
//   updateCredits,
//   setTheme,
//   setLanguage,
//   setNotificationsEnabled,
//   setCurrentChatRoom,
//   incrementUnreadMessages,
//   clearUnreadMessages,
//   setContacts,
//   setGrade,
// } = headerSlice.actions;

// export default headerSlice.reducer;

// src/store/userSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { localStorageMiddleware } from "./middleware";

// thunk for user registration
export const registerUser = createAsyncThunk(
    'user/register',
    async (userData) =>{
        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/create_user/', userData)
            return response.data.payload
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    }
)

export const fetchUserDetail = createAsyncThunk(
  "/user/profile",
  async (credentials) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/auth/login/",
      credentials
    );
    return response.data.user_data;
  }
);

const initialState = {
  pageTitle: "User",
  credits: 0,
  name: "",
  email: "",
  grade: "",
  avatar_url: "",
  user_id: "",
  isLoggedIn: false,
  token: null,
  created_at: null,
  theme:"light",
  language: "en", // user preference
  notificationsEnabled: true, // user preference
  role: "user", // user role
  lastLogin: null, // user activity
  currentChatRoom: null, // chat specific data
  unreadMessages: 0, // chat specific data
  contacts: [], // user contacts
  courses: [], // user courses
  scrollId: new Date().getTime(),
}
// Check if window is defined before using localStorage


export const headerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGrade: (state, action) => {
      state.grade = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      if (!action.payload) {
        state.token = null;
        axios.defaults.headers.common["Authorization"] = null;
      }
    },
    setCredits: (state, action) => {
      state.credits = action.payload;
    },
    updateCredits: (state, action) => {
      state.credits = state.credits + action.payload;
    },
    setScrollId: (state, action) => {
      state.scrollId = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);

      axios.interceptors.request.use(
        function (config) {
          config.headers.Authorization = `Bearer ${action.payload}`;
          return config;
        },
        function (error) {
          return Promise.reject(error);
        }
      );
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);
      }
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setNotificationsEnabled: (state, action) => {
      state.notificationsEnabled = action.payload;
    },
    setCurrentChatRoom: (state, action) => {
      state.currentChatRoom = action.payload;
    },
    incrementUnreadMessages: (state) => {
      state.unreadMessages += 1;
    },
    clearUnreadMessages: (state) => {
      state.unreadMessages = 0;
    },
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
  extraReducers: {
    [fetchUserDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUserDetail.fulfilled]: (state, action) => {
      const {
        credits,
        name,
        email,
        avatar_url,
        user_id,
        role,
        lastLogin,
        grade,
        contacts,
        courses,
        password, // Assuming password is part of user data for some reason
      } = action.payload;
      state.credits = credits;
      state.name = name;
      state.password = password;
      state.email = email;
      state.grade = grade;
      state.avatar_url = avatar_url;
      state.user_id = user_id;
      state.role = role;
      state.courses = courses;
      state.contacts = contacts;
      state.lastLogin = lastLogin;
      state.isLoading = false;
       // Save user data to localStorage
       localStorage.setItem('user', JSON.stringify(action.payload));
    },
    [fetchUserDetail.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  setLoggedIn,
  setToken,
  setCredits,
  setScrollId,
  updateCredits,
  setTheme,
  setLanguage,
  setNotificationsEnabled,
  setCurrentChatRoom,
  incrementUnreadMessages,
  clearUnreadMessages,
  setContacts,
  setGrade,
} = headerSlice.actions;

export default headerSlice.reducer;
