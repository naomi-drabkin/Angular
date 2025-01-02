import { Injectable } from '@angular/core';
import { Class } from '../models/Class';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {
  classes:Class[]=[];
  updateClass:Class; 
  ClassServise:any
  // constructor() { }
  get(){
    return this.classes;
  }

  Add(c:Class){
    this.classes.push(c);
  }

  update(c:Class){
    this.ClassServise.updateClass = this.classes.find((p:Class)=> p.ID == c.ID);
    this.updateClass = c;
  }

  Delete(c:Class) {
    let toDelete = this.classes.findIndex(
      (t: Class) => t.ID == c.ID
    );
    this.classes.slice(toDelete,1);
  }
  
}
