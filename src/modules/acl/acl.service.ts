import { Injectable } from '@nestjs/common';

@Injectable()
export class ACLService {
  getHello(): string {
    return 'Hello World!';
  }
}
