import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.scss']
})
export class PaginationButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() label: string = ""
  @Output() click: EventEmitter<undefined> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.click.emit()
  }

}
