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
    },
    {
      "index": 9,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 10,
      "type": 0,
      "description": "Click event"
    },
    {
      "index": 11,
      "type": 0,
      "description": "Click event"
    },
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
      document.getElementById("container")?.scrollBy(0,10);
      }, 1000);
          
  }

  
}
