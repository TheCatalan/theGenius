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
    return this.eventSubject.asObservable();
  }

  changeEvent(event: Event) {
    this.eventSubject.next(event);
  }

}
