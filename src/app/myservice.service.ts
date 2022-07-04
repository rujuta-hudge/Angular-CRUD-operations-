import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persons } from './pmodel';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {


  constructor(private http: HttpClient) { }

  sendingdata(data: persons) {
    const values = { name: data.name, city: data.city };
    return this.http.post("http://localhost:3000/persons", values)
  }

  getdata() {
    return this.http.get("http://localhost:3000/persons")
  }

  deletedata(x: number) {
    return this.http.delete("http://localhost:3000/persons/" + x);

  }

  editdata(x: number) {
    return this.http.get("http://localhost:3000/persons/" + x);

  }

  updatedata(data: persons) {
    const body = { name: data.name, city: data.city }
    return this.http.put("http://localhost:3000/persons/" + data.id + "/", body)

  }
}
