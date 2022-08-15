import mock from "../../mock-api/mock";

mock.onPost('/register').reply((a) => {
    const data = JSON.parse(a.data);
    let roles;
    // console.log(`mock-data: ${JSON.stringify(a.data)}`)
    roles = data.user === 'abcd@abcd.com' ? ['user'] : [];

    const response = {
        user: data.user,
        accessToken: 'abcd',
        roles
    }
    // console.log(`response-mock: ${JSON.stringify(response)}`)

    return [200, response];
});

mock.onPost('/login').reply((a) => {
    const data = JSON.parse(a.data);
    let roles;
    // console.log(`mock-data: ${JSON.stringify(a.data)}`)
    roles = data.user === 'abcd@abcd.com' ? ['user'] : [];

    const response = {
        user: data.user,
        accessToken: 'abcd',
        roles
    }
    // console.log(`response-mock: ${JSON.stringify(response)}`)

    return [200, response];
});