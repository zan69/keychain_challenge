import mock from "../../mock-api/mock";

mock.onPost('/register').reply((a) => {
    console.log(a)

    return [200, a];
});