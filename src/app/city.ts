export class City {
    id?:number;
    name:string;
    country?:string;
    temp:string;
    clouds:string;
    humidity:string;
    wind:string;
    icon:string;
    description:string;
    feels_like?: string;
    temp_min?: string;
    temp_max?: string;
    pressure?: string;
    lon?:string;
    lat?:string;
    windDeg?:string;
    sunrise?:Date;
    sunset?:Date;

    constructor(name:string,country:string,temp:string,
        clouds:string,humidity:string,wind:string,icon:string,
        description:string, id:number, feels_like:string, temp_min:string,
        temp_max:string, pressure:string, lon:string, lat:string, windDeg:string,
        sunrise:Date,sunset:Date){
        this.name = name;
        this.country = country;
        this.temp = temp;
        this.clouds = clouds;
        this.humidity = humidity;
        this.wind = wind;
        this.icon = icon;
        this.description = description;
        this.id = id;
        this.feels_like = feels_like;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.pressure = pressure;
        this.lon = lon;
        this.lat = lat;
        this.windDeg = windDeg;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }
}
