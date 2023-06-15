/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as mapboxgl from 'mapbox-gl';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

(mapboxgl as any).accessToken = environment.mapboxToken;

if (!navigator.geolocation) {
  alert('this browser does not support geoLocation');
  throw new Error('this browser does not support geoLocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
