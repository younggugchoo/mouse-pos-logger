import { Component, OnInit } from '@angular/core';
import { LogLevel } from 'app/log-level.enum';
import { MySpecialLoggerService } from 'app/my-special-logger.service';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css']
})
export class MouseTrackZoneComponent implements OnInit {

  logLevel:LogLevel = LogLevel.DEBUG;
  logger:MySpecialLoggerService;

  constructor() { 
    this.logger = new MySpecialLoggerService(this.logLevel);  
  }



  captureMousePos($event:MouseEvent){
    this.logger.debug('click event occured');
    const ps = [$event.clientX, $event.clientY];
    this.logger.debug(`x:${ps[0]}, y:${ps[1]}`);
  }

  ngOnInit() {
  }

}
