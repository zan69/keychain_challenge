# Routing and component settings:

Components need to be created in their own folder in the /components folder, and they need a "nameConfig.js" file with
the following format:

```js
import Homepage from "./Homepage";

const HomepageConfig = {
    settings: {
        navBar: true,
    },
    path: 'home',
    element: <Homepage/>,
}

export default HomepageConfig;
```

Routes are configured in `src/configs/AllRoutes.js`, where configs have to be included in the `routes` list and their
individual settings are loaded in. 


