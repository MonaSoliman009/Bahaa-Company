import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  public editDataDetails: any = [];
  public testerId: any = '';
  public subject = new Subject<any>();
  constructor() {}
  private messageSource = new BehaviorSubject(this.editDataDetails);
  private testerSource = new BehaviorSubject(this.testerId);
  currentTesterId = this.testerSource.asObservable();

  currentMessage = this.messageSource.asObservable();
  changeMessage(message: any) {
    this.messageSource.next(message);
  }
  changeTesterid(id: any) {
    this.testerSource.next(id);
  }
}
