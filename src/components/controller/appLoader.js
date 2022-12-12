import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd2d17fabb8764aaa936637eb008284e2', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
