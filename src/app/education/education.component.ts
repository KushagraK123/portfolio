import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Education } from './education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [DataService]

})
export class EducationComponent implements OnInit {

  constructor(private dataService: DataService) { }

  educations = this.dataService.getEducations();

  ngOnInit() {
  }

}
