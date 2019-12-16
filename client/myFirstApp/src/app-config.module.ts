import { NgModule, InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  url: string;
}

export const APP_DI_CONFIG: AppConfig = {
   url: 'http://192.168.0.15:1337'
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }],
})
export class AppConfigModule { }
