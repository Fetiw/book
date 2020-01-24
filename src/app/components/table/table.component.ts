import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from "@angular/material/sort";
import { Book } from "../../models/book";
import { MatTableDataSource } from "@angular/material/table";
import { BookApiServiceService } from "../../book-api-service.service";
import { Router } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  books: Book[] = [];

  dataSource;

  displayedColumns: string[] = ['id', 'author', 'title'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private bookApiService: BookApiServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookApiService
      .getAll()
      .subscribe(
        (books) => {
          this.dataSource = new MatTableDataSource<Book>(books.map((item, i) => ({
            ...item,
            idx: i + 1
          })));
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openBook(id) {
    this.router.navigate(['book/' + id]);
  }

}
