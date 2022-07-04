import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { persons } from './pmodel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  p: number = 1;
  title = 'crudProject';

  ourform = new FormGroup({

    name: new FormControl(''),
    city: new FormControl(''),
  })

  searchterm: string = '';

  constructor(private service: MyserviceService) {
  }

  representdata: any = [];
  data: persons = { name: '', city: '', id: -1 }

  ngOnInit() {
    this.service.getdata().subscribe(res => {
      this.representdata = res;
      console.log(res)
    }
    );
  }

  senddata() {
    console.log(this.ourform.value);
    
    const data = { name: this.ourform.value.name, city: this.ourform.value.city, id: -1 };
    this.service.sendingdata(data).subscribe(res => {
      console.log("data submitted!!");
      this.ngOnInit();
    })
  }

  deletedata(x: number) {
    this.service.deletedata(x).subscribe(res => {
      console.log("deleted successfully");
      this.ngOnInit();
    })
  }

  editdata(x: number) {
    this.service.editdata(x).subscribe(res => {
      this.ourform.setValue(res)
      console.log(this.ourform.value);
    },
      error => (
        console.log(error)
      ))
  }

  updatedata() {
    this.service.updatedata(this.ourform.value).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    }
    )
  }
}
