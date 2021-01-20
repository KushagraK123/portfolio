import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Course } from './course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [DataService]
})
export class CoursesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  showAll: boolean = false
  max: number = 2
  allCourses: Array<Course> = this.dataService.getCourses();
  courses = this.allCourses.slice(0,Math.min(this.max,this.allCourses.length));
  ngOnInit() {
  }

  toggleViewMore() {
    this.showAll = !this.showAll
    if(this.showAll) {
      this.courses = this.allCourses;
    }else {
      this.courses = this.allCourses.slice(0,Math.min(this.max,this.allCourses.length));
    }
  }

}