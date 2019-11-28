import {MessageService} from './message.service';
import {LoggerService} from './logger.service';

describe('MessageService', () => {
  let loggerService: LoggerService;
  let messageService: MessageService;

  beforeEach(() => {
    loggerService = jasmine.createSpyObj('loggerService', ['log']);
    messageService = new MessageService(loggerService);
  });

  it('should be created', () => {
    expect(messageService).toBeTruthy();
  });

  it('should be empty at init', () => {
    expect(messageService.messages).toEqual([]);
  });

  it('should save message on add', () => {
    messageService.add('A test message');
    expect(messageService.messages.length).toBe(1);
    expect(messageService.messages).toContain('A test message');
  });

  it('should be empty on clear', () => {
    messageService.add('A test message');
    messageService.clear();
    expect(messageService.messages).toEqual([]);
  });

  it('should log on add', () => {
    messageService.add('A Test Message');
    expect(loggerService.log).toHaveBeenCalledWith('A Test Message');
  });

  it('should log on clear', () => {
    messageService.clear();
    expect(loggerService.log).toHaveBeenCalledWith('cleared');
  });
});
