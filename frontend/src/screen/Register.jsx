import React from 'react'

const Register = () => {
    return (
        <>
            <>

                {/* App favicon */}
                {/* Bootstrap Css */}
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
                                    <a href="index.html" className="auth-logo mb-5 d-block">
                                        <img
                                            src="assets/images/logo-dark.png"
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
                                    <h4>Sign up</h4>
                                    <p className="text-muted mb-4">Get your Chatvia account now.</p>
                                </div>
                                <div className="card">
                                    <div className="card-body p-4">
                                        <div className="p-3">
                                            <form action="index.html">
                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <div className="input-group bg-light-subtle rounded-3  mb-3">
                                                        <span
                                                            className="input-group-text text-muted"
                                                            id="basic-addon5"
                                                        >
                                                            <i className="ri-mail-line" />
                                                        </span>
                                                        <input
                                                            type="email"
                                                            className="form-control form-control-lg bg-light-subtle border-light"
                                                            placeholder="Enter Email"
                                                            aria-label="Enter Email"
                                                            aria-describedby="basic-addon5"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Username</label>
                                                    <div className="input-group bg-light-subtle mb-3 rounded-3">
                                                        <span
                                                            className="input-group-text border-light text-muted"
                                                            id="basic-addon6"
                                                        >
                                                            <i className="ri-user-2-line" />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-lg bg-light-subtle border-light"
                                                            placeholder="Enter Username"
                                                            aria-label="Enter Username"
                                                            aria-describedby="basic-addon6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label">Password</label>
                                                    <div className="input-group bg-light-subtle mb-3 rounded-3">
                                                        <span
                                                            className="input-group-text border-light text-muted"
                                                            id="basic-addon7"
                                                        >
                                                            <i className="ri-lock-2-line" />
                                                        </span>
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-lg bg-light-subtle border-light"
                                                            placeholder="Enter Password"
                                                            aria-label="Enter Password"
                                                            aria-describedby="basic-addon7"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button
                                                        className="btn btn-primary waves-effect waves-light"
                                                        type="submit"
                                                    >
                                                        Sign up
                                                    </button>
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <p className="text-muted mb-0">
                                                        By registering you agree to the Chatvia{" "}
                                                        <a href="#" className="text-primary">
                                                            Terms of Use
                                                        </a>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <p>
                                        Already have an account ?{" "}
                                        <a href="./login" className="fw-medium text-primary">
                                            {" "}
                                            Signin
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

export default Register
