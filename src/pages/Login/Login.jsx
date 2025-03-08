import React, { useContext, useEffect, useRef, useState } from 'react';
import loginBg from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication2.png';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from =  location.state?.from?.pathname || "/"
    const { signIn } = useContext(AuthContext);
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, {replace: true})
            })
            .catch(err => console.error(err)
            )
    };

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);


    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen p-16 my-16" style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover' }}>
            <div className="hero-content flex-col lg:flex-row h-full w-full border justify-between px-20">
                <div className="text-center lg:text-left md:w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div onSubmit={handleLogin} className="card md:w-1/2 max-w-sm shrink-0 items-center">
                    <h1 className="text-5xl font-bold text-black">Login now!</h1>
                    <form className="card-body w-full">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <label className="fieldset-label"> < LoadCanvasTemplateNoReload /> </label>
                            <input onBlur={handleValidateCaptcha} type="text" ref={captchaRef} name='captcha' className="input" placeholder="Type the Captcha Above" />

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <input disabled={disabled} className="btn btn-neutral mt-4" type="submit" value="Login" />

                        </fieldset>
                    </form>
                    <p><small>New Here? <Link className='underline text-blue-700' to="/signup">Create an account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;