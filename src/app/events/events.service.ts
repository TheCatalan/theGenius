import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  event: Event;
  eventSubject = new BehaviorSubject<Event>('');

  constructor() { }

  saveData(name) {
    this.event = name;
    console.log(name);
  }

  getData() {
    return this.event;
  }

  getDataObeserver() {
<<<<<<< HEAD
    return this.eventSubject.asObservable();
=======
    // return this.num.asObservable();
>>>>>>> 75db975180981469a2f3325fe882691f8e3b51fb
  }

  changeEvent(event: Event) {
    this.eventSubject.next(event);
  }

}
