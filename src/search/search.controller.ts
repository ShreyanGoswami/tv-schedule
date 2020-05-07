import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    SHOW_SEARCH_QUERY_NAME : string = 'show'
    constructor(private readonly searchService: SearchService) {}

    @Get('show')
    getSearch(@Query() query) : Promise<string> {
        console.log('Received request to search for show ', query)
        if(query.hasOwnProperty(this.SHOW_SEARCH_QUERY_NAME)) {
            return this.searchService.search(query[this.SHOW_SEARCH_QUERY_NAME])
                .then((data) => { 
                    return data 
                })
                .catch((error) => { 
                    console.log('Something went wrong while calling API with error ', error)
                    throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR)
                })
        } else {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
        }
    }
}
