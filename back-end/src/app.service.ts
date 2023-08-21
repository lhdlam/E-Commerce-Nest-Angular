import { Injectable } from '@nestjs/common';
import { DefaultDeserializer } from 'v8';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
}
