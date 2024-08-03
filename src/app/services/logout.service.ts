import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor() {}
  private modalStateSource = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalStateSource.asObservable();

  setModalState(isOpen: boolean) {
    this.modalStateSource.next(isOpen);
  }
}
