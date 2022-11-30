import { Component, Input } from '@angular/core';
import { AccordionItem } from '../mods-home/mods-home.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  openedItemIndex: number = 0;

  onClick(i: number) {
    if (this.openedItemIndex === i) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = i;
    }
  }
}
