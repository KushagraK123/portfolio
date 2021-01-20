import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [DataService]
})
export class ContactComponent implements OnInit {

  constructor(private dataService: DataService) { }

  linkedin = this.dataService.getLinkedInUrl();
  github = this.dataService.getGithubUrl();
  hackerrank = this.dataService.getHackerrankUrl();

   copyEmail() {
      const el = document.createElement('textarea');
      el.value = "kushagrakasliwal47@gmail.com";
      document.body.appendChild(el);  
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

       var x = document.getElementById("snackbar");

      // Add the "show" class to DIV
      x.className = "show";

     // After 3 seconds, remove the show class from DIV
     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);

  }
  
  ngOnInit() {
  }

}
