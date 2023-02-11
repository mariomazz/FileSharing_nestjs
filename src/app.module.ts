import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileSharingController } from './controllers/filesharing.controller';
import { FileSharingService } from './bl/services/filesharing/filesharing.service';

@Module({
  imports: [],
  controllers: [AppController, FileSharingController],
  providers: [AppService, FileSharingService],
})
export class AppModule {}
