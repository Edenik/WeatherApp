import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeaterApiService } from '../weater-api.service';
import { City } from '../city';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-user-local',
  templateUrl: './by-user-local.component.html',
  styleUrls: ['./by-user-local.component.css']
})
export class ByUserLocalComponent implements OnInit {
  cityDetailes:City[] = [];
  error:boolean = false;
  cityList:any=[];
  cityListN:any=[];
  data:any;
  id:number;
  @ViewChild("city") inputView: ElementRef;

  findWeather(city,id){
    this.weather.getWeather(city).subscribe(ele => { 
      this.data = ele;
      console.log(id);
      this.cityDetailes.push({name:this.data.name, country:this.data.sys.country.toLowerCase(),
        temp:this.data.main.temp, clouds:this.data.clouds.all, humidity:this.data.main.humidity,
        wind:this.data.wind.speed,icon:this.data.weather[0].icon,description:this.data.weather[0].description,id:id});
     console.log(this.cityDetailes) });
  }

  addCity(name){
    if(name!=""){
      this.error=false;
      this.id = Math.floor(Math.random() * 100000);
      this.cityList.push({name:name,id:this.id});
      this.localStorage.saveObjToStorage(this.cityList,"cities")
      console.log(this.cityList)
      this.cityDetailes = [];
      this.cityList.forEach(element => {
        this.findWeather(element.name,element.id);
      });
    }
    else{
      this.error = true;
    }
    this.inputView.nativeElement.value = "";

  }

  delete(index){
    this.cityListN = [];
    console.log(`the requested delete id: ${index}`)
    console.log(this.cityList)
    this.cityListN = this.cityList.filter(ele => ele.id != index);
    console.log("cityn")
    console.log(this.cityListN)
    this.cityList = this.cityListN;
    this.localStorage.saveObjToStorage(this.cityList, "cities");
    this.cityDetailes = [];
    this.cityList.forEach(element => {
      this.findWeather(element.name,element.id);
    });
  }

  showDetails(name){
    this.router.navigate([`fullDetailes/${name}`],)
  }

  constructor(private weather:WeaterApiService, private localStorage:LocalStorageService, private router:Router) { }

  
  ngOnInit(): void {
    this.cityList = this.localStorage.getObjFromStorage("cities");
    if(this.cityList== null)
    this.cityList = [];
    console.log(this.cityDetailes)

    this.cityList.forEach(element => {
      this.findWeather(element.name,element.id);
    });
  }

}
