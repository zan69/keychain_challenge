import mock from "../../mock-api/mock";

mock.onGet('/passwords').reply((_a) => {

    const response = [
        {id: 1, title: 'twitter', username: 'alpha123', url: 'www.twitter.com', password: 'Jons'},
        {id: 2, title: 'reddit', username: 'veeper', url: 'www.reddit.com', password: 'Cersei'},
        {id: 3, title: 'gmail', username: 'veeper@gmail.com', url: 'www.gmail.com', password: 'Jaime'},
        {id: 4, title: 'discord', username: 'zanm', url: 'www.discord.com', password: 'Arya'},
        {id: 5, title: 'tiktok', username: 'asdasd', url: 'www.tiktok.com', password: 'Kape'}
    ];

    return [200, response]
})