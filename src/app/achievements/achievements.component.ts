import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
  providers: [DataService]
})
export class AchievementsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  achievements = this.dataService.getAchievements()

  ngOnInit() {
  }

}
