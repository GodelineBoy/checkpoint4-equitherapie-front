import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Therapeute } from 'src/model/Therapeute.model';
import { TherapeuteService } from 'src/service/therapeute.service';


@Component({
  selector: 'app-therapeute',
  templateUrl: './therapeute.component.html',
  styleUrls: ['./therapeute.component.css']
})
export class TherapeuteComponent implements OnInit {

  therapeutes: Therapeute[];
  urlBack: string = environment.urlBack;
  downloadFile: string = environment.downloadFile;

  constructor(private therapeuteService: TherapeuteService) {
    this.therapeutes = [];
   }

  ngOnInit() {
    this.therapeuteService.getAllTherapeutes().subscribe((therapeutes: Therapeute[]) => {
      this.therapeutes = therapeutes;
    })
   
      }

}
