import { Component } from '@angular/core';
import { CourService } from 'src/app/services/cour.service';

@Component({
  selector: 'app-listecour',
  templateUrl: './listecour.component.html',
  styleUrls: ['./listecour.component.css']
})
export class ListecourComponent {
  constructor(private courservice: CourService) { }

  ngOnInit() {
    this.getCours()
  }
  
  tabcours: any = []

  getCours() {
    this.courservice.getCours().subscribe((value) => {
      // console.log(value.data);
      this.tabcours = value.data
    })
  }
}
