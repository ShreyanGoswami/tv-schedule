import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './search/search.controller';
import { SearchService } from './search/search.service';

@Module({
  imports: [],
  controllers: [AppController, SearchController],
  providers: [AppService, SearchService],
})
export class AppModule {}
