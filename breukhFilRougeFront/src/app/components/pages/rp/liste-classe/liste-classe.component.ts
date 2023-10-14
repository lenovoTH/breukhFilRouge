import { Component } from '@angular/core';
import { ClassOu } from 'src/app/models/model';
import { CourService } from 'src/app/services/cour.service';

@Component({
  selector: 'app-liste-classe',
  templateUrl: './liste-classe.component.html',
  styleUrls: ['./liste-classe.component.css']
})
export class ListeClasseComponent {
  constructor(private courservice: CourService) { }
  ngOnInit() {
    this.classes()
  }
  tabclass: ClassOu[] = []
  classes() {
    this.courservice.getClasses().subscribe((value) => {
      this.tabclass = value.data
      console.log(this.tabclass);
    })
  }

  courClick(){
    // console.log(id);
  }

}
