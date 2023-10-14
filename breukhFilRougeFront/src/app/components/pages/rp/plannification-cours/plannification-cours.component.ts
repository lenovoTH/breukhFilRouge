import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Salle } from 'src/app/models/model';
import { SessionCourService } from 'src/app/services/session-cour.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable, of } from 'rxjs';


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
      h_debut: ['', Validators.required, this.verifyheuredebut],
      h_fin: ['', Validators.required, this.verifyheurefin],
      date: ['', Validators.required],
      duree: ['', Validators.required],
      mode: ['', Validators.required],
      salle: ['', Validators.required],
    })
  }

  verifyheurefin: AsyncValidatorFn = (group: AbstractControl):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null> => {
    const endTime = this.convertion(group.value)
    const startTime = this.convertion(group.parent?.get('h_debut')?.value)
    if (startTime && endTime && startTime >= endTime) {
      return of({ error: "L'heure de fin doit être après l'heure de début." });
    }
    if (endTime && (endTime < this.convertion('09:00') || endTime > this.convertion('16:00'))) {
      return of({ error: "l'heure de fin doit etre comprise entre 9h et 20h." });
    }
    return of(null)
  }

  verifyheuredebut: AsyncValidatorFn = (group: AbstractControl):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null> => {
    const startTime = this.convertion(group.value)
    // const startTime = this.convertion(group.parent?.get('h_debut')?.value)
    if (startTime && (startTime < this.convertion('08:00') || startTime > this.convertion('15:00'))) {
      return of({ error: "l'heure de début doit etre comprise entre 8h et 18h." });
    }
    return of(null)
  }

  convertion(heure: string) {
    const coupe = heure.split(':')
    let h = +coupe[0] * 3600
    let m = +coupe[1] * 60
    return h + m
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
      Swal.fire({
        icon: 'success',
        title: 'Session de cour ajouté avec succès',
        showConfirmButton: false,
        timer: 1500,
      })
    })
  }



}


