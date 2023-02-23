import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { VehiclesRoutingModule } from './vehicles.routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { NgForm } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,FormsModule,
        ReactiveFormsModule,
        VehiclesRoutingModule,NgxSpinnerModule
    ],
    declarations: [
        LayoutComponent,
        ListVehiclesComponent,
        AddVehiclesComponent
    ]
})
export class VehiclesModule { }