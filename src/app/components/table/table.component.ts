import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {Book} from "../../models/book";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  @Input()
  books = [];

  dataSource;

  displayedColumns: string[] = ['id', 'author', 'title'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.books);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
