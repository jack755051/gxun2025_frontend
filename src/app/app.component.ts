import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SHARED_COMPONENTS } from './shared/shared';
import { COMMON_COMPONENTS } from './common/common';

import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ...COMMON_COMPONENTS,
    TranslatePipe,
    TranslateDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gxun_frontend';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('en');
    // 在伺服器環境中使用默認語言
    const defaultLang = 'en';
    translate.use(defaultLang);
  }

  ngOnInit() {}
}
