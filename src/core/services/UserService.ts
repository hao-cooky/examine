import apiClient from "../clients/HttpClient.ts";

export type User = {
    id: number;
    name: string;
    language: string;
    bio: string;
    version: number;
};
abstract class UserService {
    abstract getUsers(): Promise<User[]>;
}

class UserServiceImpl extends UserService {
    async getUsers(): Promise<User[]> {
        return apiClient.get('/Demos/json-dummy-data/5MB.json');
    }
}

export default new UserServiceImpl();
