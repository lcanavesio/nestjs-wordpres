import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'DESDE-ENTRE-RIOS-API Backend';
  }
}
