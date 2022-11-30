import { Component } from '@angular/core';
export interface AccordionItem {
  title: string;
  content: string;
}

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss'],
})
export class ModsHomeComponent {
  modalOpen: boolean = false;
  items: AccordionItem[] = [
    {
      title: 'Why would you even....',
      content: 'consider such an unreasonable solution',
    },
    { title: 'How computers get drunk', content: 'they take screenshots' },
    { title: 'What do you call someone', content: 'who cannot hear' },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
