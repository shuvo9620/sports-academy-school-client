import { FcGoogle } from 'react-icons/fc';
import { ImSpinner9 } from 'react-icons/im';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { saveUserInDb } from '../../Auth_JS/auth';
import { useState } from 'react';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, signInWithGoogle } = useAuth();
  const location = useLocation();
  const from = location?.state?.from.pathname || '/';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // user login by email & password
  const onSubmit = info => {
    console.log(info);
    const email = info.email;
    const password = info.password;
    setLoading(true);
    signIn(email, password)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        alert('Login successful');
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message);
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // user login by google
  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then(result => {
        saveUserInDb(result.user);
        alert('Login successful');
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err.message);
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 mt-4 mb-4'>
      <div className='max-w-md p-6 rounded-md bg-white shadow-md'>
        <div className='mb-8 text-center'>
          <h1 className='my-5 text-3xl font-semibold'>Log In</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                placeholder='Enter Your Mail'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
                {...register("email", { required: true })}
              />
              {errors.email && <span>Email is required</span>}
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
                placeholder='Enter Your Mail'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
                {...register("password", { required: true })}
              />
              {errors.password && <span>Password is required</span>}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='btn btn-neutral w-full rounded-md text-white py-2'
              disabled={loading}
            >
              {loading ? (
                <ImSpinner9 className='m-auto animate-spin' size={22} />
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>

        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 cursor-pointer'
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>

        <p className='px-6 text-sm text-center text-gray-400'>
          Don't have an account?
          <Link to='/signup' className='hover:underline hover:text-blue-500 text-gray-500'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
