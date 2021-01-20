import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [DataService]
})
export class ProjectsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  showAll: boolean = false
  max: number = 2
  allProjects: Array<Project> = this.dataService.getProjects();
  projects = this.allProjects.slice(0,Math.min(this.max,this.allProjects.length));
  ngOnInit() {
  }

  toggleViewMore() {
    this.showAll = !this.showAll
    if(this.showAll) {
      this.projects = this.allProjects;
    }else {
      this.projects = this.allProjects.slice(0,Math.min(this.max,this.allProjects.length));
    }
  }

}
