import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  num = 1;
  sub: Subscription;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.num = this.eventsService.getData();
    console.log(this.num);
    this.sub = this.eventsService.getData.subscribe((num1: any) => {this.num = num1});
  }

  // this.num = this.eventsService.getData();
  // console.log(this.num);

}
