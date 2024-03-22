import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-uheader',
  templateUrl: './uheader.component.html',
  styleUrls: ['./uheader.component.css']
})
export class UheaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
