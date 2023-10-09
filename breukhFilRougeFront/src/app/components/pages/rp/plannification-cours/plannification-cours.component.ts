import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Salle } from 'src/app/models/model';
import { SessionCourService } from 'src/app/services/session-cour.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plannification-cours',
  templateUrl: './plannification-cours.component.html',
  styleUrls: ['./plannification-cours.component.css']
})
export class PlannificationCoursComponent {
  myFormPlanning!: FormGroup

  constructor(private sessioncourservice: SessionCourService, private fb: FormBuilder,
    private route: ActivatedRoute) {
  }

  courid: string = ""
  ngOnInit() {
    this.salles()
    this.route.paramMap.subscribe(value => {
      this.courid = value.get('id')!;
    })
    this.myFormPlanning = this.fb.group({
      cour: [this.courid, Validators.required],
      h_debut: ['', Validators.required],
      h_fin: ['', Validators.required],
      date: ['', Validators.required],
      duree: ['', Validators.required],
      mode: ['', Validators.required],
      salle: ['', Validators.required],
    })
  }

  get mode() {
    return this.myFormPlanning.get('mode');
  }

  get salle() {
    return this.myFormPlanning.get('salle');
  }

  tabsalle: Salle[] = []
  salles() {
    this.sessioncourservice.getSalles().subscribe((value) => {
      this.tabsalle = value
    })
  }

  addSess() {
    this.sessioncourservice.addSessionCour(this.myFormPlanning.value).subscribe((value) => {
      console.log(value);
    })
  }

}

