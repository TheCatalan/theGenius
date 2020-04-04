import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Subscription } from 'rxjs';
import { Event } from '../event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  event: Event;
  name: string;
  // sub: Subscription;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
<<<<<<< HEAD
    this.eventsService.eventSubject.subscribe(event => this.event = event);
    this.name = this.event.eventName;
    // this.num = this.eventsService.getData();
    console.log(this.event.eventName);
    // this.sub = this.eventsService.getData.subscribe((num1: any) => {this.num = num1});
=======
    this.num = this.eventsService.getData();
    console.log(this.num);
    //this.sub = this.eventsService.getData.subscribe((num1: any) => {this.num = num1});
>>>>>>> 75db975180981469a2f3325fe882691f8e3b51fb
  }

  // this.num = this.eventsService.getData();
  // console.log(this.num);

}
