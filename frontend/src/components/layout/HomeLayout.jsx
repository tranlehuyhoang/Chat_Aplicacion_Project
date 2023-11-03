
import { Outlet, useNavigate } from 'react-router-dom';
import User from '../common/User';
import Menu from '../common/Menu';

const HomeLayout = () => {


    // navigate('/login');
    return (


        <>
            {/* App favicon */}
            {/* magnific-popup css */}
            <link
                href="/assets/libs/magnific-popup/magnific-popup.css"
                rel="stylesheet"
                type="text/css"
            />
            {/* owl.carousel css */}
            <link
                rel="stylesheet"
                href="/assets/libs/owl.carousel/assets/owl.carousel.min.css"
            />
            <link
                rel="stylesheet"
                href="/assets/libs/owl.carousel/assets/owl.theme.default.min.css"
            />
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
            <div className="layout-wrapper d-lg-flex">
                {/* Start left sidebar-menu */}
                <Menu />
                {/* end left sidebar-menu */}
                {/* start chat-leftsidebar */}
                <User />
                {/* end chat-leftsidebar */}
                {/* Start User chat */}
                <Outlet />
                {/* end  layout wrapper */}
                {/* JAVASCRIPT */}
                {/* Magnific Popup*/}
                {/* owl.carousel js */}
                {/* page init */}
            </div>
        </>
    )

}

export default HomeLayout