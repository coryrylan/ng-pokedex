import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GlobalVariable } from "../_api/config"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }


  getCountries(){
  return  this.http.get(`${GlobalVariable.BASE_API_URL}/countries`)
  }

  getStatics(){
  return  this.http.get(`${GlobalVariable.BASE_API_URL}/statistics`)
  }

  getHistory(data:any){
    return this.http.get(`${GlobalVariable.BASE_API_URL}/history?country=${data.country}&day=${data.day}`)
  }
}


