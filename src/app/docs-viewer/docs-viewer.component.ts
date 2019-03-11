import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cxlib-docs-viewer',
  templateUrl: './docs-viewer.component.html',
  styleUrls: ['./docs-viewer.component.scss']
})
export class DocsViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onBtnClicked(e) {
    alert('Clicked: ' + e);
  }

  public onBtnClosed(e) {
    alert('closed: ' + e)
  }
}
