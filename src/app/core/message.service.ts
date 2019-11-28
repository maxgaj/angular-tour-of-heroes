import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor(private loggerService: LoggerService) {
  }

  add(message: string) {
    this.messages.push(message);
    this.loggerService.log(message);
  }

  clear(): void {
    this.messages = [];
    this.loggerService.log('cleared');
  }
}
