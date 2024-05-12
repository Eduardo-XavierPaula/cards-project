import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss',
})
export class CardTitleComponent {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) title: string = '';
}
