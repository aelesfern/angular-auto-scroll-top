import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { Route1Component } from './route-1.component';
import { Route2Component } from './route-2.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '1', component: Route1Component },
        { path: '2', component: Route2Component },
        { path: '*', redirectTo: '1' },
      ],
      { scrollPositionRestoration: 'top' }
    ),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    Route1Component,
    Route2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
