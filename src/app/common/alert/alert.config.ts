import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlertConfig {
  /** default alert type */
  public type: string = 'warning';

  /** is alerts are dismissible by default */
  public dismissible: boolean = false;

  /** default time before alert will dismiss */
  public dismissOnTimeout?: number = undefined;

  public isShow: boolean = false;

  private _toggleShow : Subject<boolean> = new Subject<boolean>();
  private _messageChange: Subject<string> = new Subject<string>();


  set showStatus(value: boolean) {
    this._toggleShow.next(value);
  }

  set message(value: string) {
    this._messageChange.next(value);
  }

  get toggleShow(): Observable<boolean> {
    return this._toggleShow;
  }


  get messageChange(): Observable<string> {
    return this._messageChange;
  }
}
