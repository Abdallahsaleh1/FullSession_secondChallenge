import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  Events = [
    {
      "index": 0,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 1,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 2,
      "type": 1,
      "description": "Visit new page event"
    },
    {
      "index": 3,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 4,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 5,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 6,
      "type": 2,
      "description": "Scroll event"
    },
    {
      "index": 7,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 8,
      "type": 0,
      "description": "Click event"
    }
  ]

  logoType = [
    {"src" : "assets/svg/click.svg",
    "type" : 0},
    {
      "src":"assets/svg/scroll.svg",
      "type": 2
    },
    {
      "src": "assets/svg/visit.svg",
      "type": 1
    }
  ]
counter = -1;
show = false;
  constructor() { }

  ngOnInit(): void {
  }

  Play(){
    this.Events = this.Events.sort();
    this.show = true;
    setInterval(() => {
      this.counter = this.counter +1; 
      document.getElementById("container")?.scrollBy(0,100);
      }, 1000);
          
  }

  
}
