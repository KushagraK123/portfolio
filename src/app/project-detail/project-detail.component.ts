import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router, RouterLink, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [DataService]
})
export class ProjectDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }


  projectId:number = Number.parseInt(this.route.snapshot.paramMap.get('id'));
  project = this.dataService.getProjectWithId(this.projectId);


  ngOnInit() {
  }

}
