import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() classNames: string | string[] = '';
  @Input() data: any[] = [];
  @Input() headers: any[] = [];
}
