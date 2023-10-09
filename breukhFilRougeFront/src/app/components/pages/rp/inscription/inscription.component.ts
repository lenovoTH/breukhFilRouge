import { Component } from '@angular/core';
import { SessionCourService } from 'src/app/services/session-cour.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor(private sessioncour: SessionCourService) { }
  csvData: any;

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.csvData = e.target?.result;
    };
    reader.readAsText(file);
  }

  importData() {
    console.log(this.csvData);
    this.sessioncour.addfileInscription(this.csvData).subscribe(value => {
      console.log(value);
    })
  }

}
