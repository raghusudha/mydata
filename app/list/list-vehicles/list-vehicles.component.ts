import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import { clone } from 'lodash';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.scss'],
})
export class ListVehiclesComponent {
  vehicleList: Vehicle[] = [];
  isDeleting: boolean = false;
  vehicleForm: boolean = false;
  editVehicleForm: boolean = false;
  editedVehicle: any = {};
  
  constructor(private vehicleService: VehicleService,private router:Router){}

    ngOnInit(){
      this.vehicleList = this.vehicleService.getVehicles();
    }
    deleteVehicle(vehicle: Vehicle) {
      this.vehicleService.deleteProduct(vehicle);
  }
  showEditVehicleForm(vehicle: Vehicle) {
    this.vehicleService.vehicleEdit(vehicle);
  }
}
