import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return ' Server up and runing';
  }
  getUser(): string{
    return  "get user name"
  }
}
