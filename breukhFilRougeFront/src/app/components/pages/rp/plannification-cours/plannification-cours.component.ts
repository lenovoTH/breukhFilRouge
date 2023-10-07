import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourService } from 'src/app/services/cour.service';

@Component({
  selector: 'app-plannification-cours',
  templateUrl: './plannification-cours.component.html',
  styleUrls: ['./plannification-cours.component.css']
})
export class PlannificationCoursComponent {
  myFormPlanning!: FormGroup

  constructor(private courservice: CourService, private fb: FormBuilder) {
    this.myFormPlanning = this.fb.group({
      cour: ['', Validators.required],
      h_debut: ['', Validators.required],
      h_fin: ['', Validators.required],
      prof: ['', Validators.required],
    })
  }

}


