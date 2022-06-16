import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-wrapper',
  templateUrl: './icon-wrapper.component.html',
  styleUrls: ['./icon-wrapper.component.scss']
})
export class IconWrapperComponent implements OnInit {
  @Input() info: string | number = "";

  constructor() { }

  ngOnInit(): void {
  }

}
