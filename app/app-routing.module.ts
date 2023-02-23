import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVehiclesComponent } from './list/list-vehicles/list-vehicles.component';
import { AddVehiclesComponent } from './list/add-vehicles/add-vehicles.component';
import { VehiclesModule } from './list/vehicles.module';
import { HomeComponent } from './home/home.component';
const vehiclesModule = () => import('./list/vehicles.module').then(x => x.VehiclesModule);
const routes: Routes = [
  // { path: 'add-vehicles', component: AddVehiclesComponent },
  // { path: 'vehicles/:id',      component: ListVehiclesComponent },
  // {
  //{  path: 'vehiclesList',
    //component: ListVehiclesComponent
  //},
  // { path: 'add-vehicles/:carnumber', component: AddVehiclesComponent },
  // {
  //   path: 'vehiclesList',
  //   component: ListVehiclesComponent
  // },
 // { path: '',
  //  redirectTo: '/vehiclesList',
  //  pathMatch: 'full'
  //},
  // { path: '**', component: PageNotFoundComponent }

  { path: 'home', component: HomeComponent },
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'list', loadChildren: vehiclesModule },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
