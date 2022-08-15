import Homepage from "./Homepage";

const HomepageConfig = {
    settings: {
        navBar: true,
    },
    path: 'home',
    element: <Homepage/>,
    allowedRoles: ['user'],
}

export default HomepageConfig;