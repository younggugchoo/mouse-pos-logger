import { Component } from '@angular/core';
import { LogLevel} from './log-level.enum';
import { MySpecialLoggerService } from 'app/my-special-logger.service';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl works!';

  logger: MySpecialLoggerService;

  constructor(){
    this.logger = new MySpecialLoggerService(LogLevel.INFO);
    this.testLogLevel();
  }

  private testLogLevel(){
    console.log("+++++++++++++info++++++++++++++");
    this.logger.debug("test logging....debug");
    this.logger.warn("test logging....warn");
    this.logger.info("test logging....info");
    this.logger.error("test logging....error");

    this.logger.logLevel = LogLevel.DEBUG;
    console.log("+++++++++++++debug++++++++++++++");
    this.logger.debug("test logging....debug");
    this.logger.warn("test logging....warn");
    this.logger.info("test logging....info");
    this.logger.error("test logging....error");

    this.logger.logLevel = LogLevel.WARN;
    console.log("+++++++++++++warn++++++++++++++");
    this.logger.debug("test logging....debug");
    this.logger.warn("test logging....warn");
    this.logger.info("test logging....info");
    this.logger.error("test logging....error");

    this.logger.logLevel = LogLevel.ERROR;
    console.log("+++++++++++++error++++++++++++++");
    this.logger.debug("test logging....debug");
    this.logger.warn("test logging....warn");
    this.logger.info("test logging....info");
    this.logger.error("test logging....error");



  }
}
