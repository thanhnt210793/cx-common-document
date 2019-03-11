import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CxComponentsLibraryModule } from '@orient/cx-components-library';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatExpansionModule
} from '@angular/material';

import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { ComponentsModule } from './components/components.module';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { DocsViewerComponent } from './docs-viewer/docs-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NavFooterComponent,
    NavLeftComponent,
    DocsViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CxComponentsLibraryModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    NgbModule,
    MatTabsModule,
    MatExpansionModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }