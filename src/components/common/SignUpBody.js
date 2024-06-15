import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useDispatch , useSelector } from "react-redux";
import { closeModal, openModal } from "@/store/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import { setCredits, setLoggedIn, setToken , fetchUserDetail } from "@/store/userSlice";
import analyticsUtil from "@/utils/analyticsUtil";
import { SIGN_UP_IMAGES } from "@/utils/globalConstantUtil";
import { ModalWrapper } from "@/components/common/ModalWrapper";
import { useRouter } from "next/navigation";
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import React, { useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { AiFillCompass } from "react-icons/ai";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { RiLockPasswordLine } from "react-icons/ri";


function SignUpBody({ closeModal, extraObject }) {
  
  const router = useRouter();
  const INITIAL_REGISTER_OBJ = {
    otp: "",
    email: "",
    password: "",
    name: '',
    mobile: '',
    confirmPassword: '',
    grade: '',
    country: '',
    role:'',
  };
  const user = useSelector((state) => state.user);
  const [country, setCountry] = useState('');
  // const [mobile, setMobile] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const handleCountryChange = (value) => {
    setCountry(value);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, 'Mobile number must be a valid number')
      .length(10, 'Mobile number must be exactly 10 digits')
      .required('Mobile number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    grade: Yup.string().required('Grade is required'),
    age: Yup.number('Enter a valid number').required('Age is required'),
    country: Yup.string().required('Country is required'),
   role: Yup.string().required('Role is required'),
    // otp: Yup.string()
    // .when('isOtpSent', {
    //   is: true,
    //   then: Yup.string().required('OTP is required'),
    //   otherwise: Yup.string().notRequired()
    // })
    // otp: Yup.string().required('OTP is required'),
    // .when('isOtpSent', {
    //   is: true,
    //   then: Yup.string().required('OTP is required'),
    //   otherwise: Yup.string().notRequired()
    // }),
    // isOtpSent: Yup.boolean(),
  });
  

  const { isSignIn } = extraObject;
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    setIsOtpSent(false);
    setMessageToast("")
    setErrorMessage("");
    setErrors({});
    setLoginObj({ otp: "", email: "", password: ""  , confirmPassword:"",mobile:"", name:"",
      country:"", grade:"", role:""
    });
  }, [isSignIn]);

  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_REGISTER_OBJ);
  const [errors, setErrors] = useState({});

  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    
    return ()=>{
      if(timeoutId){
        
        clearTimeout(timeoutId)
        }
    }
  }, [timeoutId])
  const openSignUp = () => {
    // dispatch(closeModal())
    closeModal();
    router.push("/sign-up");
  };

  const openSignIn = () => {
  
    router.push("/sign-in");
  };

  // useEffect(() => {
  //    if(loginObj.otp.length > 2){
  //             console.log(loginObj)
  //         submitVerificationCode()
  //    }
  // }, [loginObj.otp])
 

  const submitVerificationCode = async (e) => {
    setErrorMessage("");
    setErrors({});
    console.log("submitVerificationCode", loginObj.otp);
  
      setLoading(true);
      const userDatao = {
        // name: "ahmed or john",
        email: loginObj.email,
        password: loginObj.password,
        name:loginObj.name,
        mobile:loginObj.mobile,
        grade:loginObj.grade,
        code:loginObj.otp,
      };
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/auth/verify-email/",
          userDatao
        );

        console.log("email verified sucess successfully:", response.data);
        
        if (response.data.message === "Email verified successfully") {
          alert("Email verified successfully");

          setLoading(false);
          dispatch(setLoggedIn(true));
          setIsOtpSent(true);
            setMessageToast("Email verified successfully !");
          setShowToast(true);
          console.log("email verified now");
          // const creds ={

          // }
          dispatch(fetchUserDetail({email:loginObj.email, password:loginObj.password}));
          console.log(user)
        } else {
          setErrorMessage(response.data.message);
          setErrors(response.data.message);
          setMessageToast(response.data.message);
          setShowToast(true);
        }
      } catch (error) {
        
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error("Error response1:", error.response.data);
          alert(error.response.data.message);
          setMessageToast(error.response.data.message);
          setShowToast(true);
        } else if (error.request) {
          // Request was made but no response received
          console.error("Error request2:", error.request);
          setMessageToast("No response received from the server");
          setShowToast(true);
          alert("No response received from the server");
        } else {
          // Something happened in setting up the request
          console.error("Error message3:", error.message);
          alert("Error in setting up the request");
        }
      } finally{

        setLoading(false);
        }
      // setIsOtpSent(true);

      // let response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/user/verifyMailOTP', loginObj)
    //   if (response.data.success) {
    //     // if(1){
    //     let user = response.data.payload;
    //     // let user = {name : "User", token : "Signintoken"}
    //     localStorage.setItem("name", user.name);
    //     dispatch(setLoggedIn(true));
    //     dispatch(setToken(user.token));
    //     // dispatch(setCredits(user.credits))

    //     //Analytics Tracking
    //     analyticsUtil.identifyUser(user);
    //     closeModal();
    //   } else {
    //     setErrorMessage(response.data.message);
    //   }
    //   setLoading(false);
       
      };

  const submitForm = async (e) => {
    e.preventDefault();
    if (loading) return 1;
    if (isOtpSent) {
      console.log("otp is sent");
      submitVerificationCode();
    } else {
      sendMailOtp();
    }
  };

//   this is working function 
const sendMailOtp = async (e) => {
  setErrorMessage("");
  setErrors({});
  setShowToast(false)
  
  try {
    await validationSchema.validate(loginObj, { abortEarly: false });

    setLoading(true);

    const userData = {
      name: loginObj.name,
      email: loginObj.email,
      password: loginObj.password,
      grade: loginObj.grade,
      mobile: loginObj.mobile,
      country:loginObj.country,
      
      role: "student",
      courses: [],
      children: [],
    };
    console.log("userData", userData);

    const response = await axios.post("http://127.0.0.1:8000/auth/create_user/", userData);

    console.log("User created successfully:", response.data);
    alert("User created successfully");

    if (response.data) {
      setIsOtpSent(true);
      setMessageToast("User created successfully");
      setShowToast(true);
      console.log("Success");
    } else {
      setErrorMessage(response.data.message);
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);

    } else {
      console.error('Error registering user:', error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        if(error.response.data.message === 'Email already exists'){
          setMessageToast("Email already exists");
          setShowToast(true);
          // router.push('/sign-in');
          const id = setTimeout(() => {
            router.push('/sign-in');
          }, 5000);
          setTimeoutId(id);
        }
        alert(error.response.data.message);
      } else if (error.request) {
        console.error("Error request:", error.request);
        setMessageToast("No response received from the server");
        setShowToast(true);
        alert("No response received from the server");
      } else {
        console.error("Error message:", error.message);
        alert("Error in setting up the request");
      }
    }
  } finally {
    setLoading(false);
  }
};



// clearTimeout(timeoutId); // Stops the timeout

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>timer >>>>>>>
 const [showToast, setShowToast] = useState(false);
 const [userCreated, setUserCreated] = useState(false);
 const [userExists, setUserExists] = useState(false);
 const [messageToast, setMessageToast] = useState("");

useEffect(() => {
    if (showToast) {
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 20000); // Dismiss after 5 seconds

      // Cleanup the timer if the component unmounts or isOtpSent changes
      return () => clearTimeout(timer);
    }
  }, [showToast]);

 const accept = () => {
    // setIsOtpSent(false);
    setShowToast(false);
    
  }
 


  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    // <ModalWrapper isOpen={isOpen} title={isSignIn ? "Sign In" : "Sign Up"} size="lg" closeModal={closeModal}>

    <div className=" flex items-center rounded-xl">

      <div className="grid grid-cols-1 md:grid-cols-2 w-full ">

        <div className="text-center rounded-xl bg-slate-100 ">
          <div className="mt-10 md:mb-0 mb-10 inline-block">
            <span className="font-bold text-2xl">
              <img
                className="mask inline-block mr-2 mask-circle w-10"
                src="/android-chrome-192x192.png"
              />{" "}
              Web Design AI
            </span>
            <div className="carousel   mt-6 w-full">
              {SIGN_UP_IMAGES.map((img, k) => {
                return (
                  <div
                    id={"slide" + (k + 1)}
                    key={k}
                    className="carousel-item relative w-full"
                  >
                    <div className="w-full h-96">
                      <img
                        src={img.imageUrl}
                        className="w-full object-cover rounded px-6 h-72"
                      />
                    </div>
                    <div className="  absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                      <a
                        href={`#slide${k != 0 ? k : 5}`}
                        className="btn btn-circle btn-ghost"
                      >
                        ❮
                      </a>
                      <h3 className="text-sm mt-4">{img.title} </h3>
                      <a
                        href={`#slide${k == 4 ? 1 : k + 2}`}
                        className="btn btn-circle btn-ghost"
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        {/* form >>>>>>>>> */}
       
        <div className="p-12 md:p-10 pb-12 bg-red-300 ">
          <form onSubmit={(e) => submitForm(e)}>
            <div className="mb-10">

              {!isOtpSent && (
                <p className="text-center md:mt-0 mt-6 text-xl mb-4 font-semibold">
                  {isSignIn ? "Sign In" : "Sign Up"}
                </p>
              )}
              {isOtpSent && (
                <>
                  <p className="text-center text-lg   md:mt-0 mt-6   font-semibold">
                    Enter verification code received on {loginObj.email}
                  </p>
                  <p className="text-center text-slate-500 mt-2 text-sm">
                    Didn&apos;t receive mail? Check spam folder
                  </p>
                </>
              )}
              {isOtpSent 
              && showToast
               && (
                <>
                  <div className="toast toast-end">
                  {/* <progress className="progress w-100"></progress> */}
                    <div className="alert alert-info flex flex-col ">
                    <progress className="progress w-20"></progress>
                      <span>New mail arrived.</span>
                    </div>
                    <div className="alert alert-success">
                      <span>Message sent successfully.</span>
                    </div> 
                             <div role="alert" className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Your purchase has been confirmed!</span>
</div>

<div role="alert" className="alert">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>we use cookies for no reason.</span>
  <div>
    <button className="btn btn-sm">Deny</button>
    <button onClick={accept} class="btn btn-sm btn-primary">Accept</button>
  </div>
</div>
                  </div>

                  <div role="alert" className="alert">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>we use cookies for no reason.</span>
  <div>
    <button className="btn btn-sm">Deny</button>
    <button onClick={accept} class="btn btn-sm btn-primary">Accept</button>
  </div>
</div>

        
                </>
              )}
              {!isOtpSent && (
                <>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                   {/* name */}
        <label className="w-full">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <label className="input input-bordered input-accent flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="name"
              name="name"
              value={loginObj.name}
              
              onChange={(e) =>
                updateFormValue({
                  updateType: "name",
                  value: e.target.value,
                })
              }
            />
          </label>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </label>
                         {/* Email */}

               <label className="w-full ">
          <div className="label">
            <span className="label-text ">What is your email?</span>
          </div>
          <label className="input input-bordered input-accent 
                  flex items-center gap-2 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow "
              value={loginObj.email}
              placeholder={"Ex- name@gmail.com"}
              onChange={(e) =>
                updateFormValue({
                  updateType: "email",
                  value: e.target.value,
                })
              }
            />
          </label>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </label>

                         {/* Age */}
                         <label className="w-full">
          <div className="label">
            <span className="label-text">What is your age?</span>
          </div>
          <label className="input input-bordered input-accent flex items-center gap-2">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM2.598 9.008l4.484 4.485a6 6 0 0 1-4.484-4.485ZM8 14a6 6 0 0 1-4.485-1.91L10.09 5.515A6 6 0 0 1 8 14ZM3.514 3.515A6 6 0 0 1 8 2v2.439l-3.485 3.484A6 6 0 0 1 3.514 3.515ZM9 2a6 6 0 0 1 4.485 1.91L5.91 10.485A6 6 0 0 1 9 2ZM13.402 9.008 8.918 4.523A6 6 0 0 1 13.402 9.008ZM14 8a6 6 0 0 1-1.514 3.485l-4.485-4.485A6 6 0 0 1 14 8ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z" />
            </svg> */}
            <FaPersonCircleQuestion />
            <input
              type="text"
              className="grow"
              placeholder="Age"
              name="age"
              value={loginObj.age}
                  onChange={(e) =>
                updateFormValue({
                  updateType: "age",
                  value: e.target.value,
                })
              }
            />
          </label>
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                           </label>
    
              {/* Mobile */}
        <label className="w-full">
          <div className="label">
            <span className="label-text">What is your mobile?</span>
          </div>
          <label className="input input-bordered input-accent flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 opacity-70">
              <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
              <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clip-rule="evenodd" />
            </svg>
            <input
              type="text"
              className="input-info grow"
              placeholder="Mobile"
              name="mobile"
              value={loginObj.mobile}
                  onChange={(e) =>
                updateFormValue({
                  updateType: "mobile",
                  value: e.target.value,
                })
              }
            />
          </label>
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </label>

             {/* Password */}
        <label className="w-full">
          <div className="label">
            <span className="label-text">What is your password?</span>
          </div>
          <label className="input input-bordered input-accent flex w-full items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
            </svg>
            <input
              type="password"
              className="input-info grow"
              placeholder="Password"
              name="password"
              value={loginObj.password}
                  onChange={(e) =>
                updateFormValue({
                  updateType: "password",
                  value: e.target.value,
                })
              }
            />
          </label>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </label>

             {/* Confirm Password */}
        <label className="w-full">
          <div className="label">
            <span className="label-text">Confirm your password</span>
          </div>
          <label className="input input-bordered input-accent flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
            </svg>
            <input
              type="password"
              className="input-info grow"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={loginObj.confirmPassword}
                  onChange={(e) =>
                updateFormValue({
                  updateType: "confirmPassword",
                  value: e.target.value,
                })
              }
            />
          </label>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </label>

               {/* Grade */}
        <label className="w-full">
          <div className="label">
            <span className="label-text">Select your grade</span>
          </div>
          <label className="input input-bordered input-accent flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1h-11ZM2 3h12v9H2V3Zm6 10.5a.5.5 0 0 1-1 0 .5.5 0 0 1 1 0Z" />
            </svg>
            <select
              name="grade"
              defaultChecked={loginObj.grade === 'grade 6'}
              value={loginObj.grade}
              onChange={(e) => {
                updateFormValue({
                  updateType: "grade",
                  value: e.target.value,
                })
              }}
              className="grow"
            >
              <option value="" >Select your grade</option>
              {[...Array(12).keys()].map(i => (
                <option key={i + 1} value={`grade${i + 1}`}>{`Grade ${i + 1}`}</option>
              ))}
            </select>
          </label>
          {errors.grade && <p className="text-red-500 text-sm">{errors.grade}</p>}
        </label>

                {/* Country */}
        <label className="w-full">
          <div className="label">
            <span className="label-text">What is your country?</span>
          </div>
          <label className="input input-bordered input-accent flex items-center gap-2">
              <GiWorld />
            <input
              type="text"
              className="grow"
              placeholder="Country"
              name="country"
              value={loginObj.country}
                  onChange={(e) =>
                updateFormValue({
                  updateType: "country",
                  value: e.target.value,
                })
              }
            />
          </label>
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </label>


               {/* Role */}
        <label className="w-full">
          <div className="label">
            <span className="label-text">What is your role?</span>
          </div>
          <label className="input input-bordered input-accent flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm1 1H7a4 4 0 0 0-4 4 .5.5 0 0 0 1 0 3 3 0 0 1 6 0 .5.5 0 0 0 1 0 4 4 0 0 0-4-4Zm4-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4.5 10a.5.5 0 0 0-.5.5v.5a1 1 0 0 0 2 0v-.5a.5.5 0 0 0-.5-.5h-1Zm7.5 0a.5.5 0 0 0-.5.5v.5a1 1 0 0 0 2 0v-.5a.5.5 0 0 0-.5-.5h-1Z" />
            </svg>
            <select
            // defaultChecked={loginObj.role === 'student'}
              name="role"
              value={loginObj.role}
                  onChange={(e) =>
                updateFormValue({
                  updateType: "role",
                  value: e.target.value,
                })
              }
              className="grow"
            >
              <option value="" >Select your role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
            </select>
          </label>
          {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
        </label>
        </div>

        {/* Repeat similar structure for other fields */}

        {/* Submit Button */}
        {/* <button
          type="submit"
          className="btn btn-primary btn-primary h-1/2 transition delay-150 duration-300 ease-in-out hover:btn-secondary hover:-translate-y-1 hover:scale-110"
        >
          Register
        </button> */}

        {/* Divider */}
        {/* <div className="flex w-full flex-col border-opacity-50">
          <div className="divider">OR</div>
        </div> */}
                </>
              )}

              {isOtpSent && (
                <div className={`form-control w-full mt-8`}>
                  <label className="label">
                    <span
                      className={
                        "label-text text-base-content text-xs text-slate-600"
                      }
                    >
                      {"Verification Code"}
                    </span>
                  </label>
                 
                  <input
                    type={"otp"}
                    value={loginObj.otp}
                    placeholder={"Ex- 123456"}
                    onChange={(e) =>
                      updateFormValue({
                        updateType: "otp",
                        value: e.target.value,
                      })
                    }
                    className="input  input-bordered input-primary w-full "
                  />
                  
                      {/* {errors.otp && <div className="text-red-500 text-sm">{errors.otp}</div>} */}
                     
                      <label className="w-full">
                  <div className="label">
            <span className="label-text">Enter OTP ?</span>
          </div>
          <label className="input input-bordered input-accent flex items-center gap-2">
                  <RiLockPasswordLine />
            <input
              name="otp"
              placeholder={"Ex- 123456"}
              value={loginObj.otp}
                  onChange={(e) =>
                updateFormValue({
                  updateType: "otp",
                  value: e.target.value,
                })
              }
              className="grow"
            />
        
            
          </label>
          {/* {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>} */}
        </label>
                </div>
              )}

        

            <div className={`${isSignIn ? "mt-6" : "mt-6"} text-rose-500`}>
              {errorMessage}
            </div>

            {/* {!isSignIn && <div className="badge badge-warning float-right ml-2 text-xs normal-case">Get 5 Credits FREE on Sign Up</div>} */}
            {/* <div className="badge badge-secondary float-right ml-2 normal-case">Get 5 Credits FREE</div> */}
           
            <button
              type="submit"
              className={"btn mt-2 normal-case w-full btn-primary text-white  "}
            >
              {loading && <span className="loading loading-spinner"></span>}
              {isOtpSent ? `Verify` : `Get Verification Code`}
            </button>

                {isSignIn ? (
              <div className="text-center mt-4">
                {`Don't have an account yet?`}
                <div onClick={openSignUp} className="ml-2 inline-block">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Sign Up
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center mt-4">
                Already have an account?{" "}
                <div onClick={() => openSignIn()} className="inline-block">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Sign In
                  </span>
                </div>
              </div>
            )}



      {/* this is under the form directly */}
      </div>
          </form>


        </div>


 

{/* tooooooooooooooooooooooooooooooooosts==================<< important >>   */}
{isOtpSent && showToast && (
        <div className="toast toast-end">
          <div className="alert alert-info flex flex-col ">
            <progress className="progress w-20"></progress>
            <span>New mail arrived.</span>
          </div>
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your purchase has been confirmed!</span>
          </div>
          <div role="alert" className="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>we use cookies for no reason.</span>
            <div>
              <button className="btn btn-sm">Deny</button>
              <button onClick={accept} class="btn btn-sm btn-primary">
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
      {/* user exits  */}
      {userCreated && (
        <div className="toast toast-end">
          
       
          <div role="alert" className="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>User created successfully</span>
            <div>
              {/* <button className="btn btn-sm">Deny</button> */}
              <button onClick={accept} class="btn btn-sm btn-primary">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      {/* user created */}
      {userExists && (
        <div className="toast toast-end">
          
       
          <div role="alert" className="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>User already exits with the same email</span>
            <div>
              {/* <button className="btn btn-sm">Deny</button> */}
              <button onClick={accept} class="btn btn-sm btn-primary">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      {/* toast message */}
      {showToast && (
        <div className="toast toast-end">
          
       
          <div role="alert" className="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{messageToast}</span>
            <div>
              {/* <button className="btn btn-sm">Deny</button> */}
              <button onClick={accept} class="btn btn-sm btn-primary">
                OK
              </button>
            </div>
          </div>
        </div>
      )}

    
      {isOtpSent && (
        <div className="flex justify-center">
          <label className="input input-bordered input-accent flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Enter OTP"
              value={loginObj.otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </label>
        </div>
      )}

      </div>
    </div>
    // </ModalWrapper>
  );
}

export default SignUpBody;
