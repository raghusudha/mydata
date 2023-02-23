import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ListVehiclesComponent },
            { path: 'allvehicles', component: ListVehiclesComponent },
            { path: 'add-vehicles', component: AddVehiclesComponent },
            { path: 'edit/:carnumber', component: AddVehiclesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VehiclesRoutingModule { }