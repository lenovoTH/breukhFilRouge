import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfService } from 'src/app/services/prof.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent {
  constructor(private profservice: ProfService, private authservice: AuthService) { }

  ngOnInit() {
    this.listeCours()
  }
  idUser: any
  tabCours: any
  listeCours() {
    this.idUser = this.authservice.getId()
    this.profservice.getCoursByProf(this.idUser).subscribe(value => {
      this.tabCours = value.data
    })
  }

}
