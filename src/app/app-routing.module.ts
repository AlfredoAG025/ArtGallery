import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MydrawingsComponent} from "./pages/mydrawings/mydrawings.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mydrawings',
    pathMatch: "full",
  },
  {
    path: 'mydrawings',
    component: MydrawingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
