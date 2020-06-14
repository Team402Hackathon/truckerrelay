import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class BaselocalService {

  constructor(
    private storage:Storage
  ) { }

  getDados(key:string):Promise<any>{
    return this.storage.get(key);
  }

  setDados(key:string,dados:any):Promise<any>{
    return this.storage.set(key,dados);
  }

  deleteDados(key:string):Promise<any>{
    return this.storage.remove(key);
  }
}
