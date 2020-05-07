import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
    client: any;
    baseUrl : string;
    constructor() {
        this.client = require('axios')
        this.baseUrl = 'https://api.tvmaze.com/search/shows?q=' // TODO move to config file
    }

    search(query: string) {
        const url = this.baseUrl + query
        console.log('Calling API: ', url)
        const responseBody = this.client.get(url)
        .then((response) => {return response.data})
        .catch((error) => console.log(error))
        return responseBody
    }
}
