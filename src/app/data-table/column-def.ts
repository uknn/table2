import { TemplateRef } from '@angular/core';

export class ColumnDef<T> {
  key = '';
  header = '';
  footer = '';
  cell: (element: T) => any;
  isActive = true;
  hasFiltering = true;
  hasSorting = true;
  headerTemplate: TemplateRef<any> = null;
  cellTemplate: TemplateRef<any> = null;
  footerTemplate: TemplateRef<any> = null;
}
