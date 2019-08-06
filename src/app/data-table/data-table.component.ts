import { Component, Input, TemplateRef, ContentChildren, QueryList, ViewChild, OnInit } from '@angular/core';
import { MatTable, MatPaginator, MatSort } from '@angular/material';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SelectionModel } from '@angular/cdk/collections';
import { ColumnCellDirective } from './column-cell.directive';
import { ColumnHeaderDirective } from './column-header.directive';
import { ColumnFooterDirective } from './column-footer.directive';
import { ColumnDef } from './column-def';
import { DataSource } from './data-source';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T> implements OnInit {
  @ViewChild(MatTable) table: MatTable<T>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() dataSource: DataSource<T> = null;
  @Input() set columnDefs(cols: Partial<ColumnDef<T>>[]) {
    this.columns = cols.map(c => ({ ...new ColumnDef<T>(), ...c }));
    this.updateColumns();
  }
  columns: ColumnDef<T>[] = [];

  activeColumns: string[] = [];

  selection = new SelectionModel<T>(true, []);

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  updateColumns(): void {
    this.activeColumns = ['select', ...this.columns
      .filter(col => col.isActive)
      .map(col => col.key)];
  }

  reorderCols(event: CdkDragDrop<ColumnDef<T>[]>): void {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    this.updateColumns();
  }

  drop(event: CdkDragDrop<T[]>): void {
    const prevIndex = this.dataSource.data.findIndex(d => d === event.item.data);
    moveItemInArray(this.dataSource.data, prevIndex, event.currentIndex);
    this.dataSource.data = this.dataSource.data.slice();
    this.table.renderRows();
  }

  @ContentChildren(ColumnCellDirective)
  set cellTemplates(defs: QueryList<ColumnCellDirective>) {
    defs.forEach(def => {
      const col = this.columns.find(x => x.key === def.columnCell) || { cellTemplate: null, key: null };
      col.cellTemplate = def.template;
      if (!col.key) {
        col.key = def.columnCell;
        this.columns = [...this.columns, {
          ...new ColumnDef,
          ...col
        }];
      }
    });
  }

  @ContentChildren(ColumnHeaderDirective)
  set headerTemplates(defs: QueryList<ColumnHeaderDirective>) {
    defs.forEach(def => {
      const col = this.columns.find(x => x.key === def.columnHeader) || { headerTemplate: null, field: null };
      col.headerTemplate = def.template;
      if (!col.key) {
        col.key = def.columnHeader;
        this.columns = [...this.columns, {
          ...new ColumnDef,
          ...col
        }];
      }
    });
  }

  @ContentChildren(ColumnFooterDirective)
  set footerTemplates(defs: QueryList<ColumnFooterDirective>) {
    defs.forEach(def => {
      const col = this.columns.find(x => x.key === def.columnFooter) || { footerTemplate: null, key: null };
      col.footerTemplate = def.template;
      if (!col.key) {
        col.key = def.columnFooter;
        this.columns = [...this.columns, {
          ...new ColumnDef,
          ...col
        }];
      }
    });
  }
}