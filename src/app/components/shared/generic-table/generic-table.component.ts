import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, PipeTransform } from '@angular/core';
import { ColumnDef } from 'src/app/models/interfaces/column-def';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class GenericTableComponent<T> {
  @Input() columns: ColumnDef<T>[] = [];
  @Input() data: T[] = [];
  @Input() dataKey: string = 'id';
  @Input() responsiveLayout: 'scroll' | 'stack' = 'scroll';

  @Output() rowSelect = new EventEmitter<T>();

  onRowSelect(row: T) {
    this.rowSelect.emit(row);
  }

  transform(value: any, pipe?: PipeTransform): any {
    return pipe ? pipe.transform(value) : value;
  }

}