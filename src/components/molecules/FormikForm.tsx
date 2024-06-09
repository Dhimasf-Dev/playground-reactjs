import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


interface FormValues {
    name: string;
    email: string;
    password: string;
}

const FormikForm: React.FC = () => {
    const [isShow, setIsShow] = useState<boolean>(false)

    const handleShow = () => {
        setIsShow(!isShow)
    }

    const initialValues: FormValues = {
        name: '',
        email: '',
        password: ''
      };

    const validationSchema = Yup.object({
        name: Yup.string().required('cannot be empty').min(6, "min character is 6"),
        email: Yup.string().email('Invalid email address').required('cannot be empty'),
        password: Yup.string().min(6, "min character is 6")
                    .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/,
                        'Password must contain at least one uppercase letter, one lowercase letter, and one special character'
                    )
        
    });

    const onSubmit = (values: FormValues) => {
      console.log('Form data', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => (
                    <Form>
                        <div className='bg-[#97EEFF] p-14'>
                            <div className='font-bold'>
                                Page Register
                            </div>
                            <div className='mt-3'>
                                <div className='text-sm mb-2'>Name</div>
                                <Field 
                                    className='rounded p-2 w-80' 
                                    type="text"
                                    name="name"
                                    placeholder='input name' 
                                    />
                                <ErrorMessage 
                                    className='text-xs text-[#E3100D] mt-1'
                                    name="name" 
                                    component="div" 
                                />
                            </div>
                            <div className='mt-3'>
                                <div className='text-sm mb-2'>Email</div>
                                <Field 
                                    className='rounded p-2 w-80' 
                                    type="email" 
                                    name="email" 
                                    placeholder='input email' 
                                />
                                    <ErrorMessage 
                                    className='text-xs text-[#E3100D] mt-1'
                                    name="email" 
                                    component="div" 
                                />
                            </div>
                            <div className='mt-3 relative'>
                                <div className='text-sm mb-2'>Password</div>
                                <Field 
                                    className='relative rounded p-2 w-80' 
                                    type={isShow ? "text" : "password" }
                                    name="password" 
                                    placeholder='input password' 
                                />
                                <ErrorMessage 
                                    className='text-xs text-[#E3100D] mt-1'
                                    name="password" 
                                    component="div" 
                                />
                                <div 
                                    className=' absolute top-10 right-3 text-xs cursor-pointer'
                                    onClick={handleShow}
                                >
                                    Show
                                </div>
                            </div>
                            <div className='text-center mt-5'>
                                <button 
                                    className='bg-white py-2 px-5 rounded-xl' 
                                    type='submit'
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikForm
