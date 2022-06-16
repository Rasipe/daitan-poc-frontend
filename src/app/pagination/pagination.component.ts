import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MovieService } from '../services/MovieService';

const terms = {
  previus: "Anterior",
  next: "Próximo"
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  current: number = 1
  total: number = 0

  public pages: number[] = []

  get labels() {
    return terms;
  }

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.service.getPage().subscribe(res => {
      this.current = res
      this.pages = this.getPages(this.current, this.total)
    })
    this.service.getTotalPages().subscribe(res => {
      this.total = res;
      this.pages = this.getPages(this.current, this.total)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['current'] && changes['current'].currentValue) ||
      (changes['total'] && changes['total'].currentValue)
    ) {
      this.pages = this.getPages(this.current, this.total)
    }
  }

  public onGoTo(page: number): void {
    this.service.setPage(page);
  }
  public onNext(): void {
    this.service.setPage(this.current + 1);
  }
  public onPrevious(): void {
    this.service.setPage(this.current - 1);
  }

  private getPages(current: number, total: number): number[] {
    if (total <= 7) {
      return [...Array(total).keys()].map(x => ++x)
    }

    if (current > 5) {
      if (current >= total - 4) {
        return [1, total - 4, total - 3, total - 2, total - 1, total]
      } else {
        return [1, current - 1, current, current + 1, total]
      }
    }

    return [1, 2, 3, 4, 5, 6, total]
  }

}
