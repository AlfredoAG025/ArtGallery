import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MydrawingsComponent} from "./pages/mydrawings/mydrawings.component";
import {CreatedrawingComponent} from "./pages/createdrawing/createdrawing.component";
import {DetaildrawingComponent} from "./pages/detaildrawing/detaildrawing.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mydrawings',
    pathMatch: "full",
  },
  {
    path: 'mydrawings',
    component: MydrawingsComponent,
  },
  {
    path: 'drawing/:id',
    component: DetaildrawingComponent,
  },
  {
    path: 'createdrawing',
    component: CreatedrawingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
