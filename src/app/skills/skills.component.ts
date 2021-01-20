import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [DataService]
})
export class SkillsComponent implements OnInit {


  skills = this.dataService.getSkills();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
