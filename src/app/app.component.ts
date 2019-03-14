import { Component, OnInit } from '@angular/core';
import { MdMenuModule } from '@angular/material';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }
}


