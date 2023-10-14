import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassOu } from 'src/app/models/model';
import { CourService } from 'src/app/services/cour.service';
import { SessionCourService } from 'src/app/services/session-cour.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor(private sessioncour: SessionCourService,
    private courservice: CourService,
    private route: ActivatedRoute) { }
  file: any;
  classe_ouverte: any
  formData = new FormData()

  classid: string = ""
  ngOnInit() {
    this.classes()
    this.route.paramMap.subscribe(value => {
      this.classe_ouverte = value.get('id')!;
    })
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.formData.append('file', file)
    this.formData.append('classe_ouverte', this.classe_ouverte)
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   this.file = e.target?.result;
    // };
    // reader.readAsText(file);
  }

  importData() {
    console.log(this.formData);
    this.sessioncour.addfileInscription(this.formData).subscribe(value => {
      console.log(value);
      Swal.fire({
        icon: 'success',
        title: 'Inscription reussi',
        showConfirmButton: false,
        timer: 1500,
      })
    })
  }

  tabclass: ClassOu[] = []
  classes() {
    this.courservice.getClasses().subscribe((value) => {
      this.tabclass = value.data
      // console.log(this.tabclass);
    })
  }

  // modalAlerte(): void {
  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Inscription reussi',
  //     showConfirmButton: false,
  //     timer: 1500,
  //   })
  // }

}



