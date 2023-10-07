import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  jouractu: Date = new Date()
  view: CalendarView = CalendarView.Week
  CalendarView = CalendarView

  setView(view: CalendarView) {
    this.view = view
  }

  // ******************************************************************************************

  events: CalendarEvent[] = []
  constructor() {
    const event1 = {
      title: 'php',
      start: new Date("2023-10-06T09:30"),
      end: new Date("2023-10-06T10:30")
    }
    this.events.push(event1)
  }

  eventsJour = false

}
