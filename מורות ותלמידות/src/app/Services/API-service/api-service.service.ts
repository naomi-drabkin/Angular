import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { APIevent } from '../../models/APIevent';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  private url = "https://localhost:7210/api/Customer";

  // events$ : Observable<APIevent[]>;
  
  constructor(private http:HttpClient){ }

  getEvent(){
    // this.http.get<APIevent[]>(this.url).subscribe(data=>{
    //   this.events$ = of(data);
    //  });
    return this.http.get<APIevent[]>(this.url);
  }

  addEvent(e : APIevent){
    return this.http.post<APIevent>(this.url,e);
  }
}
