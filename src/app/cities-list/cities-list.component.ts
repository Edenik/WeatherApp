import { Component, OnInit } from '@angular/core';
import { WeaterApiService } from '../weater-api.service';
import { City } from '../city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  cityDetailes:City[] = [];
  cityList:any = ["Bangkok" , "London", "Paris", "Dubai", "Singapore", "New York", "Florence", "Edinburg", "Brisbane", "Vancouver","Seville","Rio de Janeiro"]
  constructor(private weather:WeaterApiService, private router:Router) { }
  data:any;

  findWeather(city){
    this.weather.getWeather(city).subscribe(ele => { 
      this.data = ele;
      this.cityDetailes.push({name:this.data.name, country:this.data.sys.country.toLowerCase(),
        temp:this.data.main.temp, clouds:this.data.clouds.all, humidity:this.data.main.humidity,
        wind:this.data.wind.speed,icon:this.data.weather[0].icon,description:this.data.weather[0].description});
     console.log(this.cityDetailes) });
  }

  showDetails(name){
    this.router.navigate([`fullDetailes/${name}`],)
  }

  ngOnInit(): void {
    // console.log(this.cityList);
    this.cityList.forEach(element => {
      this.findWeather(element);
    });
  }

}
