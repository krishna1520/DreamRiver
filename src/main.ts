import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { CardComponent } from './app/cards/card/card.component';
import { TestimonialComponent } from './app/testimonial/testimonial.component';
import { ContactUsComponent } from './app/contact-us/contact-us.component';
import { AboutUsComponent } from './app/about-us/about-us.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(HeaderComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(FooterComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(CardComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(AboutUsComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(TestimonialComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(ContactUsComponent, appConfig)
  .catch((err) => console.error(err));
  platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));


