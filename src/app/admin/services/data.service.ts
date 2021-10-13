import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  public editDataDetails: any = [];
  public testerId: any = '';
  public loginData: any = '';
  public subject = new Subject<any>();
  constructor() {}
  private messageSource = new BehaviorSubject(this.editDataDetails);
  private testerSource = new BehaviorSubject(this.testerId);
  private login = new BehaviorSubject(this.loginData);

  currentTesterId = this.testerSource.asObservable();

  currentMessage = this.messageSource.asObservable();
  currentLogindata = this.login.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
  changeTesterid(id: any) {
    this.testerSource.next(id);
  }
  changelogin(data: any) {
    this.login.next(data);
  }
}
