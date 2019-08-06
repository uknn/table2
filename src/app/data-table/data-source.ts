import { MatTableDataSource } from '@angular/material';

interface Filters {
  columns: { [field: string]: string; };
  global: string;
}

export class DataSource<T> extends MatTableDataSource<T> {
  filters: Filters = { columns: { }, global: '' };

  constructor(data: T[]) {
    super(data);

    this.filterPredicate = (item, filter: string) => {
      const globalMatch = Object.keys(item).some(field => {
        return item[field].toString().toLocaleLowerCase().includes(this.filters.global);
      });
      const colMatch = !Object.keys(this.filters.columns).reduce((remove, field) => {
        return remove || !item[field].toString().toLocaleLowerCase()
          .includes(this.filters.columns[field]);
      }, false);
      return globalMatch && colMatch;
    };
  }

  filterColumn(filterValue: string, col: string): void {
    this.filters.columns[col] = filterValue.trim().toLocaleLowerCase();
    this.filter = JSON.stringify(this.filters);
  }

  filterGlobal(filterValue: string): void {
    this.filters.global = filterValue.trim().toLocaleLowerCase();
    this.filter = JSON.stringify(this.filters);
  }
}