import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "@/store/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import { setCredits, setLoggedIn, setToken } from "@/store/userSlice";
import analyticsUtil from "@/utils/analyticsUtil";
import { SIGN_UP_IMAGES } from "@/utils/globalConstantUtil";
import { ModalWrapper } from "@/components/common/ModalWrapper";
import { useRouter } from "next/navigation";
function SignInModalBody({ closeModal, extraObject }) {
  const router = useRouter();

  const INITIAL_REGISTER_OBJ = {
    otp: "",
    email: "",
    password: "",
  };

  const { isSignIn } = extraObject;
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    setIsOtpSent(false);
    setErrorMessage("");
    setLoginObj({ otp: "", email: "", password: "" });
  }, [isSignIn]);

  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_REGISTER_OBJ);

  const openSignUp = () => {
    // dispatch(closeModal())
    closeModal();
    router.push("/form");
  };

  const openSignIn = () => {
    dispatch(
      openModal({
        title: "",
        size: "lg",
        bodyType: MODAL_BODY_TYPES.SIGN_IN_MODAL,
        extraObject: { isSignIn: true },
      })
    );
  };

  // useEffect(() => {
  //    if(loginObj.otp.length > 2){
  //             console.log(loginObj)
  //         submitVerificationCode()
  //    }
  // }, [loginObj.otp])

  const submitVerificationCode = async (e) => {
    setErrorMessage("");
    if (loginObj.email.trim() === "")
      return setErrorMessage("Email Id is Required!");
    if (loginObj.password.trim() === "")
      return setErrorMessage("password is Required!");
    if (loginObj.otp.trim() === "")
      return setErrorMessage("Verification Code is Required!");
    else if (
      !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(loginObj.email.trim())
    ) {
      return setErrorMessage("Email Id is Wrong!");
    } else {
      setLoading(true);
      const userDatao = {
        // name: "ahmed or john",
        email: loginObj.email,
        password: loginObj.password,
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
          setShowToast(true);
          console.log("email verified now");
        } else {
          setErrorMessage(response.data.message);
        }
      } catch (error) {
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
      setLoading(false);
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
       }
      };

  const submitForm = async (e) => {
    e.preventDefault();
    if (loading) return 1;
    if (isOtpSent) {
      submitVerificationCode();
    } else {
      sendMailOtp();
    }
  };

//   this is working function 
  const sendMailOtp = async (e) => {
    setErrorMessage("");
    if (loginObj.email.trim() === "")
      return setErrorMessage("Email Id is Required!");
    if (loginObj.password.trim() === "")
      return setErrorMessage("password is Required!");
    else if (
      !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(loginObj.email.trim())
    ) {
      return setErrorMessage("Email Id is Wrong!");
    } else {
      setLoading(true);
      // Call API to check user credentials and save token in localstorage
      // let response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/user/sendMailOTP', loginObj)
      const userData = {
        name: "ahmed or john",
        email: loginObj.email,
        password: loginObj.password,
        role: "student",
        courses: ["history"],
        children: ["cima", "hima"],
      };
      // const response = await axios.post('http://127.0.0.1:8000/auth/create_user/', userData)
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/auth/create_user/",
          userData
        );

        console.log("User created successfully:", response.data);
        alert("User created successfully");

        if (response.data.success) {
          console.log("sucesss ");
          // setLoginObj({...loginObj, otp : response.data.payload.otp+""})
          setLoading(false);
          setIsOtpSent(true);
        } else {
          setErrorMessage(response.data.message);
        }
      } catch (error) {
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
      setLoading(false);
      setIsOtpSent(true);
      //     setLoading(false)

      // setIsOtpSent(true)
      // console.log(error.response.data.message)
      // console.log(response.data)
      // if(response.data.success){
      // setLoginObj({...loginObj, otp : response.data.payload.otp+""})
      //     setIsOtpSent(true)
      // }else{
      //     setErrorMessage(response.data.message)
      // }
      //     setLoading(false)
    }
  };
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>timer >>>>>>>
 const [showToast, setShowToast] = useState(false);

useEffect(() => {
    if (isOtpSent) {
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 20000); // Dismiss after 5 seconds

      // Cleanup the timer if the component unmounts or isOtpSent changes
      return () => clearTimeout(timer);
    }
  }, [isOtpSent]);

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
        <div className="md:p-10 pb-12">
          <form onSubmit={(e) => submitForm(e)}>
            <div className="mb-4">
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
                  <div className={`form-control w-full mt-8`}>
                    <label className="label">
                      <span
                        className={
                          "label-text text-base-content text-xs text-slate-600 "
                        }
                      >
                        {"Enter your email Id"}
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
                  </div>

                  <div className={`form-control w-full mt-2`}>
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
                  </div>
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
                </div>
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
          </form>
        </div>
      </div>
    </div>
    // </ModalWrapper>
  );
}

export default SignInModalBody;
