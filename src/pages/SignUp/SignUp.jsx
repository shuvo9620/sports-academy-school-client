import { FcGoogle } from 'react-icons/fc'
import { ImSpinner9 } from 'react-icons/im'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { saveUserInDb } from '../../Auth_JS/auth';



const SignUp = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, signInWithGoogle, loading,
        setLoading, updateUserProfile } = useAuth();

    // confirm password validation
    const passwordValidation = (password, confirmPassword) => {
        return password == confirmPassword;
    }
    const onSubmit = info => {
        const name = info.name;
        const email = info.email;
        const password = info.password;
        const confirmPassword = info.confirmPassword;
        const photoURL = info.photoURL;
        if (passwordValidation(password, confirmPassword)) {
            createUser(email, password).then(result => {
                const signUpUser = result.user;
                updateUserProfile(name, photoURL).then(() => {
                    console.log('user profile updated');
                    saveUserInDb(result.user);
                    alert('User created successful')
                    navigate('/');
                }).catch(error => {
                    console.error(error.message);
                    alert(error.message)
                })
            }).catch(err => {
                console.log(err);
            });
        } else {
            console.log('Do not match confirm password');
            alert('Do not match confirm password');

        }
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            saveUserInDb(result.user);
            alert('Sing Up success')
            navigate('/')
        }).catch(err => {
            setLoading(false);
            console.log(err.message);
            alert(err.message);
        })
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 mt-4 mb-4'>
            <div className='max-w-md p-6 rounded-md bg-white shadow-md'>
                <div className='mb-8 text-center'>
                    <h1 className='my-5 text-3xl font-semibold'>Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='name' className='block mb-2 text-sm'>
                                User Name
                            </label>
                            <input type='name'
                                name='name'
                                placeholder='Your Name'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                data-temp-mail-org='0'
                                {...register("name", { required: true })} />
                            {errors.name && <span>Name is required</span>}
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email Address
                            </label>
                            <input type='email'
                                name='email'
                                placeholder='Your Email'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                data-temp-mail-org='0'
                                {...register("email", { required: true })} />
                            {errors.email && <span>Email is required</span>}
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input type='password'
                                name='password'
                                placeholder='Your password'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                data-temp-mail-org='0'
                                {...register("password", { required: true, minLength: 6 }, {
                                    pattern: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
                                })} />
                            {errors.password && <span>Password must be one capital letter, one special character and minimum 6 characters</span>}
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='confirmPassword' className='text-sm mb-2'>
                                    Confirm Password
                                </label>
                            </div>
                            <input type='password'
                                name='confirmPassword'
                                placeholder='Confirm your Password'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                data-temp-mail-org='0'
                                {...register("confirmPassword", { required: true, minLength: 6 }, {
                                    pattern: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
                                })} />
                            {errors.confirmPassword && <span>Password must be one capital letter, one special character and minimum 6 characters</span>}
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='photoURL' className='text-sm mb-2'>
                                    Photo URL
                                </label>
                            </div>
                            <input type='text'
                                name='photoURL'
                                placeholder='Give your Photo URL'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                data-temp-mail-org='0'
                                {...register("photoURL", { required: true })} />
                            {errors.photoURL && <span>photoURL is required</span>}
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='btn btn-neutral w-full rounded-md py-3 text-white'
                            disabled={loading}
                        >
                            {loading ? <ImSpinner9 className='m-auto animate-spin' size={22}></ImSpinner9> : 'SignUp'}
                        </button>

                    </div>
                </form>

                <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?
                    <Link
                        to='/login'
                        className='hover:underline hover:text-blue-500 text-gray-500'
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;