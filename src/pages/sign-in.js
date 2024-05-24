import React from 'react'
import { useState } from 'react'
import SignUp from '../components/common/signUp'
// import SignInModalBody from '@/components/common/SignInModalBody';
import SignInBody from '../components/common/SignInBody';
import { useDispatch, useSelector} from 'react-redux';
function Form2() {
    const [inputs, setInputs] = useState({});
    const [errors , setErrors] = useState({});

       
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      let error = '';

     if(name === 'username'){
        if(value.length < 4){
            error = 'Username must be at least 4 characters long'
        }else if (!value){
            error = 'Username is required'
        }
    }
    if( name === 'age'){
            if(!value){
                error = 'age must contain a value'
            }else if ( parseInt(value) <= 5){
                error = 'age is not enough'
            }
        }

        setErrors(errors => ({...errors, [name]: error}))
        // console.log(errors)
        
        setInputs(inputs => ({...inputs, [name]: value}))
        
     }


    
     
     const handleSubmit = (event) => {
        event.preventDefault();

        if(Object.values(errors).every(error => !error ) ){
            alert("form submitted")
            alert(inputs);
            console.log(inputs)
        }else{
            alert(`{"please fill the form correctly" ${errors.age} and ${errors.username}`)
        }
        
        console.log(errors)

    
    }
      // the new part of the game let's start with it 
        
    const {isOpen, bodyType, size, extraObject, title} = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const close = (e) => {
      dispatch(closeModal(e))
    }
    return (
    
    <SignInBody closeModal={close} extraObject={extraObject} />
    
    )
}
  
export default Form2