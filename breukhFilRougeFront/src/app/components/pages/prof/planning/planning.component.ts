import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { AuthService } from 'src/app/services/auth.service';
import { ProfService } from 'src/app/services/prof.service';
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr, 'fr');


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})

export class PlanningComponent {

  jouractu: Date = new Date()
  view: CalendarView = CalendarView.Week
  CalendarView = CalendarView

  setView(view: CalendarView) {
    this.view = view
  }
  // ******************************************************************************************

  events: CalendarEvent[] = []
  constructor(private authservice: AuthService, private profservice: ProfService) {
    this.getSessionProf()
  }

  eventsJour = false

  tabsession: any = []
  idUser: any
  getSessionProf() {
    this.idUser = this.authservice.getId()
    this.profservice.getSessionsByProf(this.idUser).subscribe(value => {
      // console.log(value);
      this.tabsession = value.data
      this.tabsession.forEach((element: any) => {
        const event1 = {
          title: 'Classe: ' + '  ' + element.cour_id.classe_ouverte_id.classe_ouverte_id.libelle
            + '  ' + '  ' + 'Module: ' + element.cour_id.module_prof_id.module_id.libelle,
          start: new Date(`${element.date}T${element.heure_debut}`),
          end: new Date(`${element.date}T${element.heure_fin}`),
        }
        this.events.push(event1)
      });
    })
  }

}

