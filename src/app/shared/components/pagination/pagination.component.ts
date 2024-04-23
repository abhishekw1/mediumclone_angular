import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  @Input() total: number = 0;
  @Input() limit: number = 0;
  @Input() url: string = '';
  @Input() currentPage: number = 0;

  pageCount: number = 1;
  pages: number[] = [];
  constructor(private utilsService: UtilsService) {}
  ngOnInit(): void {
    this.pageCount = Math.ceil(this.total / this.limit);
    this.pages =
      this.pageCount > 0 ? this.utilsService.range(1, this.pageCount) : [];
  }
}
