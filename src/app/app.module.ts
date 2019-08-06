import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LinkRowHeightsDirective } from './data-table/link-row-heights.directive';
import { DataTableComponent } from './data-table/data-table.component';
import { ColumnCellDirective } from './data-table/column-cell.directive';
import { ColumnHeaderDirective } from './data-table/column-header.directive';
import { ColumnFooterDirective } from './data-table/column-footer.directive';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoMaterialModule,
  ],
  declarations: [
    AppComponent,
    LinkRowHeightsDirective,
    DataTableComponent,
    ColumnCellDirective,
    ColumnHeaderDirective,
    ColumnFooterDirective
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}