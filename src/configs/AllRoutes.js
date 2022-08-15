import React, {useContext, useEffect} from 'react';
import HomepageConfig from "../components/homepage/HomepageConfig";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import NavbarContext from "../components/navbar/NavbarContext";
import LoginConfig from "../components/login/LoginConfig";
import RequireAuth from "../components/RequireAuth";

const defaultRoute = {
    settings: {
        navBar: true,
    },
    path: '*',
    element: <Navigate to='/home' replace/>,
    roles: ['user'],
}

const routes = [
    ...LoginConfig,
    HomepageConfig,
    defaultRoute,
]

const MyRoute = ({settings, element}) => {
    const {setNavbarIsActive} = useContext(NavbarContext);
    useEffect(() => {
        setNavbarIsActive(settings.navBar);
        console.log('route');
    }, [setNavbarIsActive, settings.navBar]);

    return element;
}

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) =>
                    <Route key={route.path} element={<RequireAuth allowedRoles={route.allowedRoles}/>}>
                        <Route
                            path={route.path}
                            element={<MyRoute {...route}/>}
                        />
                    </Route>
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default AllRoutes;
