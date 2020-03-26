import { Component, OnInit } from '@angular/core';
import { WeaterApiService } from '../weater-api.service';
import { City } from '../city';
import { RandomCountryService } from '../random-country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-random-countries',
  templateUrl: './random-countries.component.html',
  styleUrls: ['./random-countries.component.css']
})
export class RandomCountriesComponent implements OnInit {
  cityDetailes: City[] = [];
  data: any;
  country: string;
  randomList: any = [];

  constructor(private weather: WeaterApiService, private random: RandomCountryService, private router:Router) { }
  findWeather(city) {
    this.cityDetailes = [];
    this.weather.getWeather(city).subscribe(ele => {
      this.data = ele;
      this.cityDetailes.push({
        name: this.data.name, country: this.data.sys.country.toLowerCase(),
        temp: this.data.main.temp, clouds: this.data.clouds.all, humidity: this.data.main.humidity,
        wind: this.data.wind.speed, icon: this.data.weather[0].icon, description: this.data.weather[0].description
      });
      console.log(this.cityDetailes)
    });
  }
  
  showDetails(name){
    this.router.navigate([`fullDetailes/${name}`],)
  }

  ngOnInit(): void {
      this.country = this.random.getRandom();
      console.log(this.country)
      for(let i=0; i <= 7; i++){
        this.findWeather(this.country[i]);
        this.randomList.push(this.country[i])
      }
  }
}
