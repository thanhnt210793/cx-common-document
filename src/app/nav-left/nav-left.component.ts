import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cxlib-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  public onComponentClick(type) {
    this.router.navigate(['/components', type]);
  }

}
