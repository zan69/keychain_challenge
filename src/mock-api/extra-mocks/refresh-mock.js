import mock from "../mock";


mock.onGet('/refresh').reply((a) => {
    console.log(`refresh-mock: ${JSON.stringify(a)}`)

    return [200, {accessToken: 'xyzw'}]
})