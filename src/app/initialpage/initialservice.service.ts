import { Injectable } from '@angular/core';
import { Initialmodel } from './initialmodel';

@Injectable({
  providedIn: 'root'
})
export class InitialserviceService {

  private initialservice: Initialmodel[] = [];

  constructor() {}
    getAllinitials(){
      return [...this.initialservice];
    }
    getinitial(initialId: string){
      return {
        ...this.initialservice.find(initial => initial.id === initialId)
    };
    }
  deleteinitial(initialId: string){
    this.initialservice = this.initialservice.filter(initials => initials.id !== initialId);
  }
}

