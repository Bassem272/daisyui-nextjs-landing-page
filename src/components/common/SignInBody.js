import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useDispatch , useSelector} from "react-redux";
import { closeModal, openModal } from "@/store/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import { fetchUserDetail, setCredits, setLoggedIn, setToken } from "@/store/userSlice";
import analyticsUtil from "@/utils/analyticsUtil";
import { SIGN_UP_IMAGES } from "@/utils/globalConstantUtil";
import { ModalWrapper } from "@/components/common/ModalWrapper";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

function SignInBody({ closeModal, extraObject }) {
  
  const router = useRouter();
  const INITIAL_REGISTER_OBJ = {
    email: "",
    password: "",
  };

  const { isSignIn } = extraObject;
  
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    setLoading(false);
    setIsOtpSent(false);
    setErrorMessage("");
    setLoginObj({ email: "", password: "" });
  }, [isSignIn]);

  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_REGISTER_OBJ);
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const openSignUp = () => {
    // dispatch(closeModal())
    // closeModal();
    router.push("/sign-up");
  };

  const openSignIn = () => {
    // dispatch(
    
    // );
    router.push("/sign-in");
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    }
  )

  useEffect(() => {
    console.log("isLoggedIn changed:", user.isLoggedIn);
    console.log("user when changed :", user);
}, [user.isLoggedIn, user]);

  // useEffect(() => {
  //    if(loginObj.otp.length > 2){
  //             console.log(loginObj)
  //         submitVerificationCode()
  //    }
  // }, [loginObj.otp])

  const submitSingInForm = async (e) => {
    setErrorMessage("");
     setErrors({})
      setLoading(true);
      const userDatao = {
        // name: "ahmed or john",
        email: loginObj.email,
        password: loginObj.password,
        // code:loginObj.otp,
      };
      try {

        await validationSchema.validate(userDatao, {
          abortEarly: false,
        })
        const response = await axios.post(
          "http://127.0.0.1:8000/auth/login/",
          userDatao
        );

        console.log("login successfully:", response.data);

        if (response.data.message === "Authentication successful") {
          alert("Authentication successful");
          setLoading(false);
         
          setIsOtpSent(true);
          setShowToast(true);
          setToastMessage("Login successful");
          setShowToast(true);
          dispatch(fetchUserDetail({email: loginObj.email, password: loginObj.password}));
          dispatch(setLoggedIn(true));
          dispatch(setToken(response.data.token));
          setTimeout(() => {
            router.push("/");
            console.log("user at signIN:", user);
          }, 3000);
          console.log("user at signIN:", user);
        } else {
          setErrorMessage(response.data.message);
        }
      } catch (error) {
        if(error.name === 'ValidationError'){
          const newErrors = {}
          error.inner.forEach((error) => {
            newErrors[error.path] = error.message
          })
          setErrors(newErrors)
        }else{

          if (error.response) {
            // Server responded with a status other than 2xx
          console.error("Error response1:", error.response.data);
        alert(error.response.data.message);
      } else if (error.request) {
        // Request was made but no response received
      console.error("Error request2:", error.request);
    alert("No response received from the server");
  } else {
    // Something happened in setting up the request
  console.error("Error message3:", error.message);
alert("Error in setting up the request");
}
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
    submitSingInForm();
    // if (isOtpSent) {
    //   submitVerificationCode();
    // } else {
    //   sendMailOtp();
    // }
  };

  //   this is working function
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>timer >>>>>>>


  useEffect(() => {
    if (showToast) {
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); // Dismiss after 5 seconds

      // Cleanup the timer if the component unmounts or isOtpSent changes
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const accept = () => {
    // setIsOtpSent(false);
    setShowToast(false);
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setErrors({})
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className=" flex items-center rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full ">
        <div className="text-center rounded-xl bg-slate-100 ">
          <div className="mt-10 md:mb-0 mb-10 inline-block">
            <span className="font-bold text-2xl">
              <img
                className="mask inline-block mr-2 mask-circle w-10"
                src="/android-chrome-192x192.png"
              />{" "}
              Web Design AI bassem 
              sdffsd    

                      
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
        <div className="md:p-10 pb-12">
          <form onSubmit={(e) => submitForm(e)}>
            <div className="mb-4">
              
              {!isOtpSent && (
                <p className="text-center md:mt-0 mt-6 text-xl mb-4 font-semibold">
                  {/* {isSignIn ? "Sign In" : "Sign Up"} */}
                  Sign In Now  !
                </p>
              )}

              {!isOtpSent && (
                <>
                  {/* <div className={`form-control w-full mt-8`}>
                    <label className="label">
                      <span
                        className={
                          "label-text text-base-content text-xs text-slate-600 "
                        }
                      >
                        {"Enter your email please! "}
                      </span>
                    </label>
                    <input
                      type={"text"}
                      value={loginObj.email}
                      placeholder={"Ex- username@gmail.com"}
                      onChange={(e) =>
                        updateFormValue({
                          updateType: "email",
                          value: e.target.value,
                        })
                      }
                      className="input  input-bordered input-primary w-full "
                    />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div> */}

                  {/* <div className={`form-control w-full mt-2`}>
                    <label className="label">
                      <span
                        className={
                          "label-text text-base-content text-xs text-slate-600 "
                        }
                      >
                        {"Enter your password"}
                      </span>
                    </label>
                    <input
                      type={"password"}
                      value={loginObj.password}
                      placeholder={"Ex- 1234asdf"}
                      onChange={(e) =>
                        updateFormValue({
                          updateType: "password",
                          value: e.target.value,
                        })
                      }
                      className="input  input-bordered input-primary w-full "
                    />
                      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                  </div> */}

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
                </>
              )}
            </div>

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
              {/* {isOtpSent ? `Verify` : `Get Verification Code`} */}
              Log in 
            </button>

              <div className="text-center mt-4">
                {`Don't have an account yet?`}
                <div onClick={openSignUp} className="ml-2 inline-block">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Sign Up
                  </span>
                </div>
              </div>
            
          </form>
        </div>
      </div>


{/* toast  */}
{isOtpSent 
              && showToast
               && (
                <>
                  <div className="toast toast-end">
                  {/* <progress className="progress w-100"></progress> */}
                  
                    <div className="alert alert-success">
                      <span>You logged in successfully.</span>
                    </div> 
                            

<div role="alert" className="alert h-16">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>You logged in successfully.</span>
  <div>
    {/* <button className="btn btn-sm">Deny</button> */}
    <button onClick={accept} class="btn btn-sm btn-primary">OK</button>
  </div>
</div>
                  </div>

  

        
                </>
              )}


    </div>
    // </ModalWrapper>
  );
}

export default SignInBody;
