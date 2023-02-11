import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { getStringRandom } from 'src/common/utils/string_random';
import { Session } from './models/session';

@Injectable()
export class FileSharingService {
  initFileSharing(): Observable<Session> {
    return new Observable<Session>((observer) => {
      const codeObj = { session_code: getStringRandom(6) };
      observer.next(codeObj);
      observer.complete();
    });
  }
}
