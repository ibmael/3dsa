import { bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Register Arabic locale data for Angular pipes like DatePipe
registerLocaleData(localeAr);

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
