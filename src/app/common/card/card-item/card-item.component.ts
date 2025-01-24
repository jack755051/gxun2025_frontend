import { Component, Input, OnInit } from '@angular/core';
import { ViewCard } from '../../../models/interface/card.interface';

@Component({
  selector: 'gxun-card-item',
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent implements OnInit {
  @Input() ProductData: ViewCard[] = [];

  constructor() {}

  ngOnInit(): void {}
}
