import { Component } from '@angular/core';
import { CalendarEvent, CalendarNativeDateFormatter, CalendarView, DateFormatterParams } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from '@angular/common';
import { th } from 'date-fns/locale';
import { SessionCourService } from 'src/app/services/session-cour.service';
import { Salle } from 'src/app/models/model';
registerLocaleData(localeFr, 'fr');

class CustomHeure extends CalendarNativeDateFormatter {
  public override dayViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: 'numeric' }).format(date)
  }

  public override weekViewHour({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: 'numeric' }).format(date)
  }
}

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
  constructor(private sessioncour: SessionCourService) {
    // const event1 = {
    //   title: 'php',
    //   start: new Date("2023-10-06T09:30"),
    //   end: new Date("2023-10-06T10:30")
    // }
    // this.events.push(event1)
    this.getSessionCour()
  }

  eventsJour = false

  // dayClicked(date: Date, events: CalendarEvent[]): void {
  //   if (isSameMonth(date, this.jouractu)) {
  //     if (isSameDay(this.jouractu, date) && this.eventsJour === true || events.length === 0) {
  //       this.eventsJour = false
  //     }
  //     else {
  //       this.eventsJour = true
  //     }
  //   }
  //   this.jouractu = date
  // }

  // eventClicked(event: any) {
  //   console.log(event);
  // }

  tabsession: any = []
  getSessionCour() {
    this.sessioncour.getSession().subscribe((value) => {
      this.tabsession = value
      this.tabsession.forEach((element: any) => {
        const event1 = {
          title: 'Classe: ' + '  ' + element.cour_id.classe_ouverte_id.classe_ouverte_id.libelle
            + '  ' + 'Prof: ' + element.cour_id.module_prof_id.user_id.prenom + ' ' + element.cour_id.module_prof_id.user_id.nom
            + '  ' + 'Module: ' + element.cour_id.module_prof_id.module_id.libelle,
          start: new Date(`${element.date}T${element.heure_debut}`),
          end: new Date(`${element.date}T${element.heure_fin}`),
          // color: 'red'
        }
        this.events.push(event1)
        // console.log(this.events);
      });
    })
  }

}

