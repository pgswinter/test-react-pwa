export default class {
    constructor(initApi) {
        this.initApi = initApi;
    }
    get = () => {
        return this.initApi.get(`https://simple-api-online.herokuapp.com/api`);
    }
}