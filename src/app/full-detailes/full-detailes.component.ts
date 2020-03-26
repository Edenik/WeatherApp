import { Component, OnInit, Sanitizer } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { City } from '../city';
import { WeaterApiService } from '../weater-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-full-detailes',
  templateUrl: './full-detailes.component.html',
  styleUrls: ['./full-detailes.component.css']
})
export class FullDetailesComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private weather:WeaterApiService,private sanitizer: DomSanitizer) { }
  name:string;
  country:string;
  temp:string;
  clouds:string;
  humidity:string;
  wind:string;
  icon:string;
  description:string;
  feels_like: string;
  temp_min: string;
  temp_max: string;
  pressure: string;
  lon:string;
  lat:string;
  cityDetailes:City[] = [];
  data:any;
  mapSrc:string;
  mapSan:any;
  sunrise:Date;
  sunset:Date;
  windDeg:string;
  goBack() {
    window.history.back();
  }

  findWeather(city){
    this.cityDetailes = [];
    this.weather.getWeather(city).subscribe(ele => { 
      this.data = ele;
      console.log(this.data)
      this.sunrise = new Date(0);
      this.sunset = new Date(0);
      this.sunrise.setUTCSeconds(this.data.sys.sunrise);
      this.sunset.setUTCSeconds(this.data.sys.sunset);
      
      this.cityDetailes.push({name:this.data.name, country:this.data.sys.country.toLowerCase(),
         temp:this.data.main.temp, clouds:this.data.clouds.all, humidity:this.data.main.humidity,
         wind:this.data.wind.speed,icon:this.data.weather[0].icon,description:this.data.weather[0].description,
         feels_like:this.data.main.feels_like,temp_min:this.data.main.temp_min, temp_max:this.data.main.temp_max,
        pressure:this.data.main.pressure, lon:this.data.coord.lon, lat:this.data.coord.lat, windDeg:this.data.wind.deg, sunrise:this.sunrise, sunset:this.sunset});
      this.mapSrc = `https://maps.google.com/maps?q=${this.cityDetailes[0].lat},${this.cityDetailes[0].lon}&hl=es&z=14&amp;output=embed`;
      this.mapSan = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapSrc);
        
      console.log(this.mapSrc)
      this.country = this.cityDetailes[0].country;
      this.temp = this.cityDetailes[0].temp;
      this.clouds = this.cityDetailes[0].clouds;
      this.humidity = this.cityDetailes[0].humidity;
      this.wind = this.cityDetailes[0].wind;
      this.icon = this.cityDetailes[0].icon;
      this.description = this.cityDetailes[0].description;
      this.feels_like = this.cityDetailes[0].feels_like;
      this.temp_min = this.cityDetailes[0].temp_min;
      this.temp_max = this.cityDetailes[0].temp_max;
      this.pressure = this.cityDetailes[0].pressure;
      this.lon = this.cityDetailes[0].lon;
      this.lat = this.cityDetailes[0].lat;
      this.windDeg = this.cityDetailes[0].windDeg;
      
    });
  }


  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.name = params.name;})
     this.findWeather(this.name);


  }

}
