import { Injectable } from "@angular/core";

import { HttpClient, HttpXhrBackend } from '@angular/common/http';


@Injectable()

export default class itemService{

    constructor(private httpClient: HttpClient){ }

    getItem() {
        return this.httpClient.get('http://localhost:1337/items');
    }
    createItem(item){
        return new Promise(async (resolve, reject) => {
            try{
                const itemRes = await this.httpClient.post('http://localhost:1337/items', item).toPromise();
                resolve(itemRes);
            }catch(e){
                reject(e);
            }
        })
    }
}