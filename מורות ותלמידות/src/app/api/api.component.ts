import { Component, OnInit } from '@angular/core';
import { APIevent } from '../models/APIevent';
import { APIServiceService } from '../Services/API-service/api-service.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [AsyncPipe , JsonPipe, HttpClientModule],
  providers:[APIServiceService],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent{

  events:APIevent[];

  constructor(public apiservice:APIServiceService){}
    

  // this.events = apiservice.getEvent();

  ngOnInit():void{
    // this.apiservice.getEvent();
    this.apiservice.getEvent().subscribe(data =>{
      this.events = data;
    })
  }
}
