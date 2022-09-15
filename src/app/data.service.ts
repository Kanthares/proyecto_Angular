import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { posts } from './staff/Post';
import { postsDos } from './characters/PostDos';
import { postsTres } from './students/PostTres';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('servicio activo');
   }
  
  getData(){
    return this.http.get<posts[]>('https://hp-api.herokuapp.com/api/characters/staff')
  }

  getDataDos() {
    return this.http.get<postsDos[]>('https://hp-api.herokuapp.com/api/characters/house/:house')
  }

  getDataTres(){
    return this.http.get<postsTres[]>('https://hp-api.herokuapp.com/api/characters/students')
  }

}
