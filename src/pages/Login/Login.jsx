import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { ImSpinner } from 'react-icons/im'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const { loading, setLoading, signIn, signInWithGoogle } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    // Handle submit
    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
    }

    // Handle google signIn
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
        <div className='flex justify-center items-center min-h-screen bg-gray-50'>
            <div className='flex flex-col max-w-md p-8 rounded-md sm:p-10 bg-white text-gray-900 shadow-lg'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                required
                                placeholder='Enter Your Email'
                                className='w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-100 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                required
                                placeholder='Enter Your Password'
                                className='w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-100 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-slate-600 w-full rounded-md py-3 text-white transition duration-300 ease-in-out hover:bg-slate-700'
                        >
                            {loading ? (
                                <ImSpinner className='m-auto animate-spin' size={24} />
                            ) : (
                                'Log in'
                            )}
                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
                    <p className='px-3 text-sm text-gray-400'>Login with social accounts</p>
                    <div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
                </div>
                <div
                    onClick={handleGoogleSignIn}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100'
                >
                    <FcGoogle size={32} />
                    <p>Sign In with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don't have an account yet?{' '}
                    <Link
                        to='/signup'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login;
