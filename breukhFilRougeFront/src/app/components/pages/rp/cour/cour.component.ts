import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassOu, Idlibelle, Prof } from 'src/app/models/model';
import { CourService } from 'src/app/services/cour.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent {

  myFormCour!: FormGroup

  constructor(private courservice: CourService, private fb: FormBuilder) {
    this.myFormCour = this.fb.group({
      annee: ['', Validators.required],
      semestre: ['', Validators.required],
      module: ['', Validators.required],
      prof: ['', Validators.required],
      classe: this.fb.array([
        this.fb.group({
          class: ['', Validators.required],
          heure: ['', Validators.required]
        })
      ])
    })
  }

  ngOnInit() {
    this.classes()
    this.annees()
    this.semestres()
    this.modules()
    // this.getCours()
  }

  tabclass: ClassOu[] = []
  tabannees: Idlibelle[] = []
  tabsemestre: Idlibelle[] = []
  tabmodule: Idlibelle[] = []
  tabprof: Prof[] = []
  // tabcours: any = []


  classes() {
    this.courservice.getClasses().subscribe((value) => {
      this.tabclass = value.data
      // console.log(this.tabclass);
    })
  }

  get classe(): FormArray {
    return this.myFormCour.get("classe") as FormArray
  }

  supprimerClassee(index: number) {
    this.classe.removeAt(index);
  }

  addClassee() {
    this.classe.push(this.fb.group({
      class: '',
      heure: ''
    }))
  }

  Onsubmit() {
    // console.log(this.myFormCour.value);
    this.courservice.addCours(this.myFormCour.value).subscribe((value) => {
      console.log(value);
      Swal.fire({
        icon: 'success',
        title: 'Cour ajouté avec succès',
        showConfirmButton: false,
        timer: 1500,
      })
      this.myFormCour.reset()
    })
  }

  annees() {
    this.courservice.getAnnees().subscribe((value) => {
      this.tabannees = value
      // console.log(this.tabannees);
    })
  }

  semestres() {
    this.courservice.getSemestres().subscribe((value) => {
      this.tabsemestre = value
      // console.log(this.tabsemestre);
    })
  }

  modules() {
    this.courservice.getModules().subscribe((value) => {
      this.tabmodule = value
      // console.log(this.tabmodule);
    })
  }

  getProf() {
    const idModule = this.myFormCour.get('module')!.value;
    this.courservice.getProfbymodule(idModule).subscribe((value) => {
      // console.log(value.data);
      this.tabprof = value.data
    })
  }

  // getCours() {
  //   this.courservice.getCours().subscribe((value) => {
  //     // console.log(value.data);
  //     this.tabcours = value.data
  //   })
  // }


}
