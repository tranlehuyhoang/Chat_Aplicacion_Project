import React, { useState } from 'react'
import { useLoginMutation } from '../slices/UserApi';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { setCredentials } from '../slices/authSlice';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await login({ username: username, password: password }).unwrap();

            dispatch(setCredentials({ ...res }));

            toast.success('Login Success!');

            navigate('/');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
        setUsername('')
        setPassword('')
    }
    return (
        <>
            <>



                <link
                    href="/assets/css/bootstrap.min.css"
                    id="bootstrap-style"
                    rel="stylesheet"
                    type="text/css"
                />
                {/* Icons Css */}
                <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
                {/* App Css*/}
                <link
                    href="/assets/css/app.min.css"
                    id="app-style"
                    rel="stylesheet"
                    type="text/css"
                />
                <div className="account-pages my-5 pt-sm-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-5">
                                <div className="text-center mb-4">
                                    <a href="./" className="auth-logo mb-5 d-block">
                                        <img
                                            src="/assets/images/logo-dark.png"
                                            alt=""
                                            height={30}
                                            className="logo logo-dark"
                                        />
                                        <img
                                            src="assets/images/logo-light.png"
                                            alt=""
                                            height={30}
                                            className="logo logo-light"
                                        />
                                    </a>
                                    <h4>Sign in</h4>
                                    <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>
                                </div>
                                <div className="card">
                                    <div className="card-body p-4">
                                        <div className="p-3">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label className="form-label">Username</label>
                                                    <div className="input-group mb-3 bg-light-subtle rounded-3">
                                                        <span
                                                            className="input-group-text text-muted"
                                                            id="basic-addon3"
                                                        >
                                                            <i className="ri-user-2-line" />
                                                        </span>
                                                        <input
                                                            value={username}

                                                            onChange={e => setUsername(e.target.value)}
                                                            type="text"
                                                            className="form-control form-control-lg border-light bg-light-subtle"
                                                            placeholder="Enter Username"
                                                            aria-label="Enter Username"
                                                            aria-describedby="basic-addon3"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <div className="float-end">
                                                        <a
                                                            href="auth-recoverpw.html"
                                                            className="text-muted font-size-13"
                                                        >
                                                            Forgot password?
                                                        </a>
                                                    </div>
                                                    <label className="form-label">Password</label>
                                                    <div className="input-group mb-3 bg-light-subtle rounded-3">
                                                        <span
                                                            className="input-group-text text-muted"
                                                            id="basic-addon4"
                                                        >
                                                            <i className="ri-lock-2-line" />
                                                        </span>
                                                        <input
                                                            onChange={e => setPassword(e.target.value)}
                                                            value={password}
                                                            type="password"
                                                            className="form-control form-control-lg border-light bg-light-subtle"
                                                            placeholder="Enter Password"
                                                            aria-label="Enter Password"
                                                            aria-describedby="basic-addon4"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-check mb-4">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="remember-check"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="remember-check"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                                <div className="d-grid">
                                                    <button
                                                        className="btn btn-primary waves-effect waves-light"
                                                        type="submit"
                                                    >
                                                        Sign in
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <p>
                                        Don't have an account ?{" "}
                                        <a href="./register" className="fw-medium text-primary">
                                            {" "}
                                            Signup now{" "}
                                        </a>{" "}
                                    </p>
                                    <p>
                                        © Chatvia. Crafted with{" "}
                                        <i className="mdi mdi-heart text-danger" /> by Themesbrand
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end account-pages */}
                {/* JAVASCRIPT */}
            </>

        </>
    )
}

export default Login
