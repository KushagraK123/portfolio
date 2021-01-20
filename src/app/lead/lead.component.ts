import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss'],
  providers: [DataService]
})
export class LeadComponent implements OnInit {

  constructor(private dataService: DataService) { }

  name = this.dataService.getName();
  description = this.dataService.getProfession();

  ngOnInit() {
  }

}
