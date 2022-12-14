import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly user : any[];

    constructor() {
        this.user = [
            {
                userid: 1,
                username: 'jhon doe',
                password: 'changeme',
                pet: {name: 'alfred', picId:1}
            },
            {
                userid: 2,
                username: 'chris',
                password: 'screet',
                pet: {name: 'ghoper', picId:2}
            },
            {
                userid: 3,
                username: 'maria',
                password: 'gues',
                pet: {name: 'jenny', picId:3}
            }
        ]
    }

    async findOne(username: string): Promise<any>{
        return this.user.find(user => user.username === username);
    }
}
