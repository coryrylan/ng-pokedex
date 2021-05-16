import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../_services/api.service';
import {} from 'googlemaps';
import { last } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

declare const L:any;
@Component({
  selector: 'app-coutries',
  templateUrl: './coutries.component.html',
  styleUrls: ['./coutries.component.scss']
})
export class CoutriesComponent implements OnInit {
  countries: any;
  loginForm: FormGroup;
  socialUser: SocialUser;
  isLoggedin: boolean=false; 
  @ViewChild('map') mapElement: any;
  map: google.maps.Map | any;
  constructor(private ApiService:ApiService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService 
    ) { }

  ngOnInit() {
  //  social media login

  this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });    
  
  this.socialAuthService.authState.subscribe((user) => {
    this.socialUser = user;
    this.isLoggedin = (user != null);
    console.log("Dgdfgdf", this.socialUser);
  });

if( !navigator.geolocation){
  console.log("location not supported")
} 
else{
  navigator.geolocation.getCurrentPosition((position)=>{
    let coords = position.coords;
    var mymap = L.map('mapid').setView([coords.latitude, coords.longitude], 13);
    L.tileLayer('http://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2Fua2FyNzE1MyIsImEiOiJja29yNGVwY2QxMXE0MnBsNDZlNjBxdmVvIn0.jTv85wN6C4NeAkz2nkIXvw', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);
  var marker = L.marker([coords.latitude, coords.longitude]).addTo(mymap);
  var circle = L.circle([coords.latitude, coords.longitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);
    console.log(`lat : ${position.coords.latitude}  and  lon: ${position.coords.longitude}` )
  })
}


    this.ApiService.getCountries().subscribe((res:any)=>{
      console.log("res", res);
      this.countries= res.response;
      this.toastr.success("Success retrived")
    },error=>{
     this.toastr.error(error)
    })
  }
  ngAfterViewInit(){
    navigator.geolocation.getCurrentPosition((position)=>{
      const mapProperties = {
      
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
   console.log("thsui map" , this.map)
    })
   
  }

  watchPosition(){
    let desLat=0;
    let desLon=0;

   let id= navigator.geolocation.watchPosition((position)=>{
     
      console.log(`lat : ${position.coords.latitude}  and  lon: ${position.coords.longitude}` )
      if(position.coords.latitude===desLat){
        navigator.geolocation.clearWatch(id)
      }
      

    },err=>{
      console.log(err)
    },
    {
      enableHighAccuracy:false,
      timeout:5000,
      maximumAge:0
    })
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    // this.toastr.success("logged in success")
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
