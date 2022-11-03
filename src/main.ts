import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { FirebaseModule } from './app/shared/modules/firebase/firebase.module';
import { provideStorage, getStorage } from '@angular/fire/storage';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provide