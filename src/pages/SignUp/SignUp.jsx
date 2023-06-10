import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { ImSpinner } from 'react-icons/im'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth'

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { loading, setLoading, signInWithGoogle, createUser, updateUserProfile
    } = useAuth();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile updated');
                        reset()
                    })
                    .catch(error => console.error(error))
            })
    }


    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    // Handle google signin
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input {...register("name", { required: true })} type='text' name='name' placeholder='Enter Your Name Here' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0' />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>

                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input {...register("email", { required: true })} type='email' name='email' required placeholder='Enter Your Email Here' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' data-temp-mail-org='0' />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} type='password' name='password' required placeholder='Your Password' className='w-full mb-2 px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />

                            {errors.password && <span className='text-red-600'>Password is required</span>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>
                                Password must be at least 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>
                                Password must be one upperCase one number and one special character</p>}

                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Confirm Password
                                </label>
                            </div>
                            <input {...register("confirmPassword", { required: true })} type='password' name='confirmPassword' required placeholder='Your Password' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                            {errors.confirmPassword && <span className='text-red-600'>Confirm Password is required</span>}
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Photo Url
                            </label>
                            <input {...register("photo", { required: true })} type='text' name='photo' required placeholder='Photo URL' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0' />
                            {errors.photo && <span className='text-red-600'>Name is required</span>}
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-slate-600 w-full rounded-md py-3 text-white'
                        >
                            {loading ? (
                                <ImSpinner className='m-auto animate-spin' size={24} />
                            ) : (
                                'Sign up'
                            )}
                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div
                    onClick={handleGoogleSignIn}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                >
                    <FcGoogle size={32} />

                    <p>signup with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp