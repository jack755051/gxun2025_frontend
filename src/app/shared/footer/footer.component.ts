import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'guxn-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  thisYear!:Date;

  constructor() {
    this.thisYear = new Date();
  }
}
