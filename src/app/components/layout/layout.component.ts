import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  items!: MenuItem[];
  selectedId!: number;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-list',
      },
      {
        label: 'Despesas',
        icon: 'pi pi-list',
        items: [
          {
            label: 'Todas',
            icon: 'pi pi-table',
            routerLink: '/expenses',
          },
          {
            label: 'Nova',
            icon: 'pi pi-plus',
            routerLink: '/expenses/form',
          },
        ],
      },
       {
        label: 'Tipos de despesas',
        icon: 'pi pi-list',
        items: [
          {
            label: 'Todas',
            icon: 'pi pi-table',
            routerLink: '/expense-types',
          },
          {
            label: 'Nova',
            icon: 'pi pi-plus',
            routerLink: '/expense-types/form',
          },
        ],
      },
    ];
  }
}
