import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'components-page',
  templateUrl: './components.container.component.html',
  styleUrls: ['./components.container.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('sdf');
  }

}
