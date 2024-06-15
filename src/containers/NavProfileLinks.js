import { openModal } from "@/store/modalSlice"
import { useDispatch, useSelector } from "react-redux"
import { MODAL_BODY_TYPES } from '@/utils/globalConstantUtil'
import Link from "next/link"
import { fetchUserDetail, setLoggedIn } from "@/store/userSlice"
import { useEffect } from "react"
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import { useRouter } from "next/router"
import axios from "axios"

function NavProfileLinks() {

    const router = useRouter()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const { isLoggedIn, email, password , credits} = user
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchUserDetail({ email: email, password: password }));
        }
    }, [dispatch, email, password, isLoggedIn]); // Include all dependencies here
  
    useEffect(() => {
        console.log("isLoggedIn from navbar", user.isLoggedIn);
        console.log("user when from navbar :", user);
    }, [user.isLoggedIn, user]);

    const openLoginModal = () =>{
        router.push('/sign-in')
        console.log("jere")
        // dispatch(openModal({title : "", size:"lg",  bodyType : MODAL_BODY_TYPES.SIGN_IN_MODAL, extraObject : {isSignIn : true}}))
    }

    const openPricingModal = () =>{
        console.log("jere")
        dispatch(openModal({title : "", size:"lg",  bodyType : MODAL_BODY_TYPES.PRICING_MODAL, extraObject : {isLoggedIn, darkbg : true}}))
    }

    // const logoutUser = async() => {
    //     try{
    //             console.log(email,password)
    //       const response =  await axios.post("http://127.0.0.1:8000/auth/logout/", {
    //             email,
    //             password
                
    //         })
    //         if(response.data.message === "Logout successful"){
                
    //             localStorage.clear();
    //             dispatch(setLoggedIn(false))
    //             window.location = '/'
    //         }
    //     } catch(error){
    //         console.log(error)
    //     }
    //     }

    const logoutUser = async () => {
        // try {
            // console.log(user)
            // console.log(email);
            const response = await axios.post("http://127.0.0.1:8000/auth/logout/", {
                email:email,
                password:password
            });
            // if (response.data.message === "Logout successful") {
                localStorage.clear();
                setTimeout(()=>{

                    console.log (user)
                }, 4000)
                dispatch(setLoggedIn(false));
                window.location = '/';
            // }
        // } catch (error) {
            // console.log(error);
        // }
    }
    
        
        const handleDropDownClick = () => {
        const elem = document.activeElement;
        if(elem){
          elem?.blur();
        }
      };

    return(
        <>  
        {
            isLoggedIn && 
            <>
                <button className='btn btn-sm text-xs mr-4 normal-case hover:bg-primary btn-outline' onClick={() => openPricingModal()}>Get Subscription</button>
                <div className="md:inline-block hidden md:mt-0 mt-4"><CircleStackIcon className="w-4 h-4 inline-block mr-1"/>{credits} </div>
                <div className="dropdown  md:mt-0 mt-4 ml-6 dropdown-end">
                    <label tabIndex={0} className="btn md:hidden btn-sm normal-case btn-outline m-1">Account</label>
                    
                    <label tabIndex={0} className="btn bg-white md:flex hidden btn-circle  avatar">
                        <div className="w-6 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact z-20 dropdown-content bg-slate-50 mt-3 p-2 shadow   rounded-box w-52">
                        <li className="justify-between" onClick={() => handleDropDownClick()}>
                        <Link href={'/account/my-profile'}>
                            My Profile
                            </Link>
                        </li>

                        <li className="justify-between" onClick={() => handleDropDownClick()}>
                        <Link href={'/account/saved-websites'}>
                           My Websites
                            </Link>
                        </li>

                       
                        <div className="divider mt-0 mb-0"></div>
                        <li><a onClick={logoutUser}>Logout</a></li>
                    </ul>
                </div> 
            </>
        }
        {
            !isLoggedIn && 
            <>
                <button className='btn btn-sm text-xs mr-4 normal-case md:btn-ghost ' onClick={() => openLoginModal()}>Sign In</button>
                <Link href="/start-designing"><button className='btn md:mt-0 mt-4 btn-block btn-sm text-xs btn-outline normal-case hover:text-white hover:btn-primary'>Get Started</button></Link>
            </>
        }
            
        </>
    )
}


export default NavProfileLinks