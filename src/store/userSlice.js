import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


// thunk for user registration
export const registerUser = createAsyncThunk(
    'user/register',
    async (userData) =>{
        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/create_user/', userData)
            return response.data.payload
        }catch (error) {
            throw new Error(error.response.data.message)
        }
    }
)
export const fetchUserDetail = createAsyncThunk('/user/profile',
 async () => {
	const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/user/profile')
	return response.data.payload;
})

export const headerSlice = createSlice({
    name: 'user',
    initialState: {
        pageTitle: "User", 
        credits : 0, 
        name : "",
        isLoggedIn : false,
        token : null,
        scrollId : new Date().getTime(),
        isLoading : false
    },
    reducers: {
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
            if(!action.payload){
                state.token = null
                axios.defaults.headers.common['Authorization'] = null
            }
        },

        setCredits: (state, action) => {
            state.credits = action.payload
        },
        
        updateCredits: (state, action) => {
            state.credits = state.credits + action.payload
        },
        

        setScrollId: (state, action) => {
            state.scrollId = action.payload
        },


        setToken: (state, action) => {
            state.token = action.payload
            localStorage.setItem("token", action.payload)

            axios.interceptors.request.use(function (config) {
                config.headers.Authorization = `Bearer ${action.payload}`
                return config
              }, function (error) {
                return Promise.reject(error);
              });
             
        },

    },

    extraReducers: {

        [registerUser.pending]: state => {
			state.isLoading = true
            state.error = null
		},
		[registerUser.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.credits = action.payload.credits
            state.name = action.payload.name
			state.isLoading = false
            // state.isLoggedIn = true // assuming registration is successful makes logged in true
            // state.token = action.payload.token // assuming registration is successful sets token    
		},
		[registerUser.rejected]: state => {
			state.isLoading = false
            state.error = action.error.message
		},
        [fetchUserDetail.pending]: state => {
			state.isLoading = true
		},
		[fetchUserDetail.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.credits = action.payload.credits
            state.name = action.payload.name
			state.isLoading = false
		},
		[fetchUserDetail.rejected]: state => {
			state.isLoading = false
		},

        
        
    }
})

export const { setLoggedIn, setToken, setCredits, setScrollId, updateCredits } = headerSlice.actions

export default headerSlice.reducer