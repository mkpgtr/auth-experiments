import React from 'react'
import { Link,Form, redirect, useNavigation } from 'react-router-dom'
import customFetch from '../../utils/customFetch';
import toast, { Toaster } from 'react-hot-toast';

export const signupAction = async({request}) => {
  const formData = await request.formData();
  // mock delay of 3000 seconds
  const data = Object.fromEntries(formData);
  console.log(data)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  
  try {
    const response = await customFetch.post('/auth/register', data);
    toast.success('Registered successfully! Please login to continue.')
    return redirect('/login')
  } catch (error) {
    toast.error(error?.response?.data?.msg || 'An error occurred')
    return error
  }

  return null
}

const Signup = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <div className='min-h-screen bg-blue-200 grid place-content-center'>
      <Toaster/>
        <Form method='post' className='border border-black p-4'>
            <div className="form-row flex flex-col gap-2">
              <label htmlFor="">Username</label>
              <input name='username' type="text" className='p-2'/>
            </div>
            <div className="form-row flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input name='email' type="email" className='p-2'/>
            </div>
            <div className="form-row flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input name='password' type="password" className='p-2'/>
            </div>
            <div className="form-row flex flex-col gap-2">
          
            <button type='submit' className='bg-red-200 p-2 mt-2 rounded-xl' disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            </div>
        </Form>

        <p className='text-2xl font-bold'>Don't have an account? <Link to='/login' className='underline'>Login </Link></p>
    </div>
  )
}

export default Signup