import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'gxun-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    TranslatePipe,
    TranslateDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  headerButtonList:string[]=[];

  constructor() {
    this.headerButtonList = [
      'HEADER_PRODUCT',
      'HEADER_SUPPORT',
      'HEADER_ABOUT_US',
      'HEADER_CONTACT_US',
      'HEADER_FAQ'
    ]
  }

  ngOnInit(): void {
  }
}
