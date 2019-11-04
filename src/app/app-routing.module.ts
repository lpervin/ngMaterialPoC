import { NgModule } from '@angular/core';
import {LogviewerComponent} from './logviewer/logviewer.component'
import {DataloaderComponent} from './dataloaders/dataloader.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: "logs",
    component: LogviewerComponent,
    pathMatch: "full"
  },
  {
    path: "loaders",
    component: DataloaderComponent,
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: '/logs',
    pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
