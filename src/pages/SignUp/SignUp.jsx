import React, { useContext } from 'react';
import loginImg from '../../assets/others/authentication2.png';
import loginBg from '../../assets/others/authentication.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';



const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name, email, photo, password } = data;
        // console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(name, photo)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err)
            )
    }

    return (
        <div className="hero bg-base-200 min-h-screen p-20 my-16" style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover' }}>
            <div className="hero-content flex-col lg:flex-row-reverse h-full w-full justify-between px-20 py-8 shadow-2xl shadow-slate-600">
                <div className="text-center lg:text-left md:w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shrink-0 items-center shadow-lg shadow-slate-600 py-4">
                    <h1 className="text-5xl font-bold text-slate-900">Sign Up!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full pb-0">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" {...register("name", { required: true })} name='name' className="input w-full" placeholder="Name" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}

                            <label className="fieldset-label">Email</label>
                            <input type="email" {...register("email", { required: true })} name='email' className="input w-full" placeholder="Email" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}

                            <label className="fieldset-label">Photo URl</label>
                            <input type="url" {...register("photo", { required: true })} name='photo' className="input w-full" placeholder="Photo URL" />
                            {errors.email && <span className='text-red-600'>Photo url is required</span>}

                            <label className="fieldset-label">Password</label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*/
                            })} name='password' className="input w-full" placeholder="Password" />
                            {errors.password?.type === 'required' && <span className='text-red-600'>password is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>password must be 6 characters or more</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>password can't be more then 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-600'>password must contain one uppercase, one lowercase and one digit characters</span>}

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <input className="btn btn-neutral mt-4" type="submit" value="Sign Up" />

                            <div className="divider divider-neutral text-slate-800 font-semibold">OR</div>
                        </fieldset>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p><small className='text-black'>Already have an account? <Link className='underline text-blue-700' to="/login">Login here</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;