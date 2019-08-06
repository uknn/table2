import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[columnHeader]'
})
export class ColumnHeaderDirective {
  @Input() columnHeader: string;

  constructor(public template: TemplateRef<any>) { }
}