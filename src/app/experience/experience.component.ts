import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Experience } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [DataService]
})
export class ExperienceComponent implements OnInit {
  
  experiences = this.dataService.getExperiences();
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
