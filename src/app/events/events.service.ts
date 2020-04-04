import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  num = 0;

  constructor() { }

  saveData(num) {
    this.num = num;
    console.log(num);
  }

  getData() {
    return this.num;
  }

  getDataObeserver() {
    // return this.num.asObservable();
  }
}
