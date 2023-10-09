import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourService } from 'src/app/services/cour.service';

@Component({
  selector: 'app-listecour',
  templateUrl: './listecour.component.html',
  styleUrls: ['./listecour.component.css']
})
export class ListecourComponent {
  constructor(public modalService: NgbModal, private courservice: CourService,private router: Router) { }

  ngOnInit() {
    this.getCours()
  }

  tabcours: any = []
  getCours() {
    this.courservice.getCours().subscribe((value) => {
      this.tabcours = value.data
    })
  }

}
