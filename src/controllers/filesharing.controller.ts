import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FileSharingService } from 'src/bl/services/filesharing/filesharing.service';
import { Session } from 'src/bl/services/filesharing/models/session';

@Controller('filesharing')
export class FileSharingController {
  constructor(private readonly fileSharingService: FileSharingService) {}

  @Get('init')
  initFileSharing(): Observable<Session> {
    return this.fileSharingService.initFileSharing();
  }
}
