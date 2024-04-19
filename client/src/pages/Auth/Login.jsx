import React from 'react'
import toast from 'react-hot-toast';
import { Link,Form, redirect } from 'react-router-dom'
import customFetch from '../../utils/customFetch';

export const loginAction = async({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(formData);

  try {
    const response = await customFetch.post('/auth/login', data);
    toast.success('Logged in successfully')
    return redirect('/')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }
  return null;
}

const Login = () => {


  return (
    <div className='min-h-screen bg-blue-200 grid justify-items-center items-center   grid-cols-2'>
        <Form method='post' className='border border-black p-4 justify-self-end'>
           
            <div className="form-row flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input name='email' type="email" className='p-2'/>
            </div>
            <div className="form-row flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input name='password' type="password" className='p-2'/>
            </div>
            <div className="form-row flex flex-col gap-2">
          
            <button type='submit' className='bg-red-200 p-2 mt-2 rounded-xl'>Submit</button>
            </div>
            <p className='text-2xl font-bold'>Don't have an account? <Link to='/signup' className='underline'>Signup </Link></p>
        </Form>

      
     <div className='border-l-black p-8'>
     <p className='text-2xl max-w-[20vw] text-center mt-10 border  border-l-black mx-auto bg-black text-white py-2  italic'>Don't want to signup? <br /> <span className='underline cursor-pointer font-bold'>Login as Demo User </span>instead!</p>
     </div>
    </div>
  )
}

export default Login