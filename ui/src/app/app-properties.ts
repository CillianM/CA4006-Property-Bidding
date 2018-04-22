import {Injectable} from '@angular/core';

@Injectable()
export class Globals {
  endpoint: string = 'http://localhost:8080/CA4006/api';
  websocket: string = 'ws://localhost:8080/CA4006/bidSocket/';
  uiPath: string = '/CA4006/ui/';
}


