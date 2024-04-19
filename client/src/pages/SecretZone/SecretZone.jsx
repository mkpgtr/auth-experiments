import React from 'react'
import customFetch from '../../utils/customFetch';
import { Form, redirect } from 'react-router-dom';

export const verifySecretCode = async ({request}) => {

    const formData = await request.formData();
    // mock delay of 3000 seconds
    const data = Object.fromEntries(formData);
    console.log(data)

    try {
        const res = await customFetch.post('/codes/requestExclusive',data);
        console.log(res)
        return redirect('/personal');
    } catch (error) {
        console.log(error)
        return error;
    }

}
const SecretZone = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <Form method='POST'>
            <div className="form-row flex flex-col items-center ">
                <label htmlFor="code">Secret code</label>
                <input className='p-2' type="text"  name='code' />
            </div>
            <div className="form-row flex justify-center mt-10">
                <button type='submit' className='p-2  bg-blue-600 text-white rounded-xl'>Submit</button>
            </div>
        </Form>
    </div>
  )
}

export default SecretZone