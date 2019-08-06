import { Component } from '@angular/core';
import { DataSource } from './data-table/data-source';
import { ColumnDef } from './data-table/column-def';
import { PeriodicElement, testData } from './test-data';

// https://github.com/angular/components/issues/5927

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  columns: Partial<ColumnDef<PeriodicElement>>[] = [
    { key: 'name',   header: 'Name',   footer: 'Name',   cell: e => e.name   },
    { key: 'weight', header: 'Weight', footer: 'Weight', cell: e => e.weight },
    { key: 'symbol', header: 'Symbol', footer: 'Symbol', cell: e => e.symbol },
    { key: 'x',      header: 'X',      footer: 'X',                          },
    { key: 'y',      header: 'Y',      footer: 'Y',                          },
    { key: 'z',      header: 'Z',      footer: 'Z',                          },
  ];

  dataSource = new DataSource(testData);
}
