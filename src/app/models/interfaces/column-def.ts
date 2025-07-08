import { PipeTransform, TemplateRef } from '@angular/core';

export interface ColumnDef<T = any> {
  field: keyof T;               // propriedade do seu objeto
  header: string;               // texto do cabeçalho
  pipe?: PipeTransform;         // opcional: ex. CurrencyPipe, DatePipe
  cellTemplate?: TemplateRef<any>; // opcional: ng-template customizado
}
