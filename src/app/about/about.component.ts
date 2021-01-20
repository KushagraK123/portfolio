import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [DataService]
})
export class AboutComponent implements OnInit {

  constructor(private dataService: DataService) { }

  about = this.dataService.getAbout();

  ngOnInit() {
  }

}
