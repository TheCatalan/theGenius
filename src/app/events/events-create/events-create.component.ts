import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Event } from '../event.model';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css']
})

export class EventsCreateComponent implements OnInit {

  // commment

  event: Event;

  profileForm = new FormGroup({
    eventName: new FormControl(''),
    eventHost: new FormControl(''),
    eventDate: new FormControl(''),
    eventTime: new FormControl(''),
    timeOfDay: new FormControl(''),
    eventDescription: new FormControl(''),
    eventNumPeople: new FormControl(''),
    eventDuration: new FormControl('')
  });

  saveButton(event) {
    // this.duration = ;
    alert('Button is clicked');
    console.log(event);
  }

  durationValue() {
    this.event.eventName = this.profileForm.value.eventName;
    this.event.eventHost = this.profileForm.value.eventHost;
    this.event.eventDate = this.profileForm.value.eventDate;
    this.event.eventTime = this.profileForm.value.eventTime;
    this.event.eventDescription = this.profileForm.value.eventDescription;
    this.event.eventNumPeople = this.profileForm.value.eventNumPeople;
    this.event.eventDuration = this.profileForm.value.eventDuration;
    // this.event.eventName.setValue(this.profileForm.value.eventName);
    console.log(this.profileForm.value.eventName);
    // this.eventsService.saveData(this.profileForm.value.eventName);
    // return this.profileForm.value;
    this.eventsService.changeEvent(this.event);
  }

  ngOnInit() {
    this.eventsService.eventSubject.subscribe(event => this.event = event);
  }

  constructor(private eventsService: EventsService) {}
}
