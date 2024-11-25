import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'gxun-header',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() headerButtonList:string[]=[];

  constructor(){}

  ngOnInit(): void {
  }
}
