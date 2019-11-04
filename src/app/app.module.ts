import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from '@angular/common/http'
import {MaterialModule} from "./material.module";
import {AppRoutingModule} from "./app-routing.module";
import {SidebarMenuComponent} from './shared/sidebarmenu/sidebarmenu.component';
import {LogviewerComponent} from './logviewer/logviewer.component'
import {DataloaderComponent} from './dataloaders/dataloader.component';
import {AppComponent } from "./app.component";
import {BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, SidebarMenuComponent, LogviewerComponent, DataloaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
