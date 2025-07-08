import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  PipeTransform,
} from '@angular/core';
import { Router } from '@angular/router';
import { ColumnDef } from 'src/app/models/interfaces/column-def';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableComponent<T> {
  @Input() columns: ColumnDef<T>[] = [];
  @Input() data: T[] = [];
  @Input() dataKey: string = 'id';
  @Input() responsiveLayout: 'scroll' | 'stack' = 'scroll';
  @Input() routePrefix!: string;

  @Output() rowSelect = new EventEmitter<T>();

  constructor(private router: Router) {}

  onRowSelect(row: any) {
    this.rowSelect.emit(row);
    const id = (row as any)[this.dataKey];
    this.router.navigate([`/${this.routePrefix}/form`, id]);
  }

  transform(value: any, pipe?: PipeTransform): any {
    return pipe ? pipe.transform(value) : value;
  }
}
