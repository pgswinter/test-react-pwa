export default class {
    constructor(initApi) {
        this.initApi = initApi;
    }
    get = () => {
        return this.initApi.get(`http://localhost:3535/api`);
    }
}