
import { Component, OnInit } from '@angular/core';
import { WeaterApiService } from '../weater-api.service';
import { City } from '../city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-city',
  templateUrl: './by-city.component.html',
  styleUrls: ['./by-city.component.css']
})
export class ByCityComponent implements OnInit {
  cityDetailes:City[] = [];
  constructor(private weather:WeaterApiService, private router:Router) { }

  data:any;
  cityList:any = ["Tel Aviv","Jerusalem","Haifa","Eilat","Ponta Grossa","Modesto","Kawagoe","Tehran",
  "Niamey","Indore","Surat Thani","Iksan","Balashikha","Chengdu","Sahiwal"];
  cityInfo:any = [];
  findWeather(city){
    this.cityDetailes = [];
    this.weather.getWeather(city).subscribe(ele => { 
      this.data = ele;
      console.error('ready?')
      console.log(this.data)
      this.cityDetailes.push({name:this.data.name, country:this.data.sys.country.toLowerCase(),
         temp:this.data.main.temp, clouds:this.data.clouds.all, humidity:this.data.main.humidity,
         wind:this.data.wind.speed,icon:this.data.weather[0].icon,description:this.data.weather[0].description,
         feels_like:this.data.main.feels_like,temp_min:this.data.main.temp_min, temp_max:this.data.main.temp_max,
        pressure:this.data.main.pressure});
      console.log(this.cityDetailes) });
  }

  showDetails(name){
    this.router.navigate([`fullDetailes/${name}`],)
  }
  ngOnInit(): void {
    this.findWeather("Tel Aviv")
  }

}
