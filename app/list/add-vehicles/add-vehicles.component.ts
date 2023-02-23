import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.scss']
})
export class AddVehiclesComponent {
  form: any = {};
  vehicleForm!: FormGroup;
  isEdit: Boolean = false;
  msg:String = '';
  submitted = false;
  isAddMode!: boolean;
  public showSubmit=true;
  public isPlate=false;
  carnumber!:string;
  public regexPlateInput = '^[a-zA-Z]$|^[a-zA-Z][a-zA-Z]$|^[a-zA-Z][a-zA-Z][0-9]$|^[a-zA-Z][a-zA-Z][0-9][0-9]$|^[a-zA-Z][a-zA-Z][0-9][0-9][0-9]$|^[a-zA-Z][a-zA-Z][0-9][0-9][0-9][0-9]$|^[a-zA-Z][a-zA-Z][0-9][0-9][0-9][0-9][0-9]$|^[a-zA-Z][a-zA-Z][0-9][0-9][0-9][0-9][0-9][0-9]$';
  public regexPlateSubmit = '^[a-zA-Z][a-zA-Z][0-9]+$';
  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router,private _toast: ToastrService,
    private formBuilder:FormBuilder,
    private spinner: NgxSpinnerService
  ){}
  
  ngOnInit(){
    this.carnumber = this.route.snapshot.params['carnumber'];
    this.isAddMode = !this.carnumber;
    
    this.vehicleForm = this.formBuilder.group({
      ownername: ['', Validators.required],
      carnumber: ['', Validators.required],
      
  },);
    this.vehicleForm = new FormGroup({
      ownername: new FormControl(''),
      id: new FormControl(''),
      carnumber: new FormControl(''),
     
    })
      this.route.params.subscribe(param => {
        console.log(param)
        if(param && param['id']){
          let student = this.vehicleService.getVehicle(param['id']);
          let vehicle;
          if(vehicle){
            this.vehicleForm.setValue(vehicle);
            this.isEdit = true;
            }
          else this.router.navigate(['/vehicles'])
        }
      })
  }
  get f() { return this.vehicleForm.controls; }
  resetForm(){
    console.log('reset',this.vehicleForm)
    this.vehicleForm.reset();
  }
  onClick(event:any){
    if (this.isPlate) {
      let str = '';
      str = event.target.value;
      let pos = event.target.selectionStart;
      str = str.substring(0,pos)+String.fromCharCode(!event.charCode ? '' : event.charCode)+str.substring(pos);
      if (this.validateMaskPlate(str)) {
          return true;
      } else {
          event.preventDefault();
          return false;
      }
  }
  return true;
}
validateMaskPlate (str: any) {
  //alert(e.target.selectionStart);
  let regex = new RegExp(this.regexPlateInput);
  let regexSubmit = new RegExp(this.regexPlateSubmit);
  if (regex.test(str)||str.length ===0) {
      if (regexSubmit.test(str)&& str.length>0) {
          this.showSubmit = true;
      } else {
          this.showSubmit = false;
      }
      return true;
  } else {
       return false;
  }
}
  add(){
    
    if(this.vehicleForm.valid){
  
      this.vehicleService.vehicleList.push(this.vehicleForm.value);
      this._toast.success("Vehicle added successfully");
      this.resetForm();
 
     
      console.log('this.studentService.studelost',this.vehicleService.getVehicles())}
      
      else {
      this.msg = 'Please complete form'

    }
  }

  edit(){
    this.msg = '';
    if(this.vehicleForm.valid){
      if(this.vehicleService.vehicleEdit(this.vehicleForm.value)){
     //   this.router.navigate([''])
      }else {
        this.msg = 'Something went wrong'
      }
    }else {
      this.msg = 'Please complete form'
    }
  }
  
}

