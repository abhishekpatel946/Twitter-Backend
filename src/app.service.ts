import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger: Logger;

  constructor() {
    this.logger = new Logger(AppService.name);
  }

  getHello(): string {
    this.logger.debug('Hello world!');
    return 'Hello Nest!';
  }
}
