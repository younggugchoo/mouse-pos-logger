import { Injectable } from '@angular/core';
import {LogLevel} from './log-level.enum';
import * as format from 'date-fns/format';

@Injectable()
export class MySpecialLoggerService {

  logLevel:LogLevel;
  logs:string[] = [];

  private readonly MAX_HISTORY_CNT : number = 100;
  private readonly TIME_FORMATTER : string = 'YYYY-MM-DD HH:mm:ss.SSS';

  constructor(logLevel:LogLevel) {
    this.logLevel = logLevel;
  }

  debug(msg:string) {this.log(LogLevel.DEBUG, msg);}
  info(msg:string) {this.log(LogLevel.INFO, msg);}
  warn(msg:string) {this.log(LogLevel.WARN, msg);}
  error(msg:string) {this.log(LogLevel.ERROR, msg);}

  log(logLevel:LogLevel, msg:string){
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)){
      console.log(logMsg);
      this.keepLogHistory(logMsg);
    }
  }



  private getFormattedLogMsg(logLevel:LogLevel, msg:string):string{
    const curTimestamp = format(new Date(), this.TIME_FORMATTER);
    return `[${LogLevel[logLevel]}] ${curTimestamp} - ${msg}`;
  }

  private isProperLogLevel(logLevel:LogLevel):boolean{
    if (this.logLevel === LogLevel.DEBUG) return true;
    return logLevel >= this.logLevel;
  }

  private keepLogHistory(logMsg:string){
    if (this.logs.length === this.MAX_HISTORY_CNT){
      this.logs.shift();
    }
    this.logs.push(logMsg);
  }
}

