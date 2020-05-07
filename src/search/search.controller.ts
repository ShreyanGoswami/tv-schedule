import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { QueryConstants } from 'src/common/constants';
import { SearchService } from 'src/common/service';

@Controller()
export class SearchController {
    
    constructor(private readonly searchService: SearchService) {}

    @Get('show')
    getShow(@Query() query) : Promise<string> {
        console.log('Received request to search for show ', query)
        if (query.hasOwnProperty(QueryConstants.SHOW_SEARCH_QUERY_NAME) && Object.keys(query).length == 1) {
            return this.searchService.search(query[QueryConstants.SHOW_SEARCH_QUERY_NAME])
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
