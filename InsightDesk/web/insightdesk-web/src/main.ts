import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideHttpClient, withInterceptors } from '@angular/common/http'; // ✅ correct
import { errorInterceptor } from './app/core/http/error-interceptor.service'; // ✅ functional interceptor
import { MaterialModule } from './app/core/material.module';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
