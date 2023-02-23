import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/list`;

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicleList : Vehicle[] = [];

  constructor(private http: HttpClient) {
  }
  getVehicles(){
    return this.vehicleList;
  }
  getVehicle(id: any){
    let vehicle;
    this.vehicleList.map(val=>{
      if(val.carnumber == id) vehicle = val;
    });
    return vehicle ;
  }
  vehicleEdit(vehicle:any){
    let present: Boolean = false;
    this.vehicleList.map((val, index)=>{
      if(val.carnumber == vehicle.id) {this.vehicleList[index] = vehicle;present=true}
    });
    return present;

  }
  deleteProduct(vehicle: Vehicle) {
    this.vehicleList.splice(this.vehicleList.indexOf(vehicle), 1);
    console.log(this.vehicleList);
  }
  }




