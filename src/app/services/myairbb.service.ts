import { CarMyBb } from './../models/car-my-bb';
import { ExperienceMyBB } from './../models/experience-my-bb';
import { ApartamentMyBB } from './../models/apartament-my-bb';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserMyBB} from '../models/UserMyBB';
import {BookingMyBB} from '../models/BookingMyBB';


@Injectable()
export class MyairbbService {
  apigClientFactory: any;
  config: any;
  apigClient: any;

  apiUrlUser: string = 'http://localhost:8080/user/';
  apiUrlBooking: string = 'http://localhost:8080/booking';
  apiUrlAdmin: string = 'http://localhost:8080/admin/';
  


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.apigClientFactory = require('aws-api-gateway-client').default;
    this.config = {invokeUrl:'https://6h0lhtwq9e.execute-api.eu-west-1.amazonaws.com/dev'};
    this.apigClient = this.apigClientFactory.newClient(this.config);

  }

  getAllUsers(): Observable<UserMyBB[]> {
    return this.http.get<UserMyBB[]>(this.apiUrlUser + 'getAll');
  }

  getAllApartament(): Observable<ApartamentMyBB[]> {
    return this.http.get<ApartamentMyBB[]>(this.apiUrlAdmin + 'getAllApartment');
  }
  getAllCar(): Observable<CarMyBb[]> {
    return this.http.get<CarMyBb[]>(this.apiUrlAdmin + 'getAllCar');
  }

  getAllExperience(): Observable<ExperienceMyBB[]> {
    return this.http.get<ExperienceMyBB[]>(this.apiUrlAdmin + 'getAllExperience');
  }

  getUserById(user_id: string): Observable<UserMyBB> {
    return this.http.get<UserMyBB>(this.apiUrlUser + 'getById/' + user_id);
  }

  postUser(user: UserMyBB): Observable<UserMyBB> {
    return this.http.post<UserMyBB>(this.apiUrlUser + 'save', user, this.httpOptions);
  }

  getBookingById(booking_id: number): Observable<BookingMyBB> {
    return this.http.get<BookingMyBB>(this.apiUrlBooking + 'get/' + booking_id);
  }

  getBookingByIDApig(booking_id: number): Observable<BookingMyBB> {

    const mybbobservable = new Observable<BookingMyBB>(observer => {
      const pathTemplate = '/booking/{bookingID}';
      const method = 'GET';
      const params = {bookingID: booking_id};
      const additionalParams = {};
      const body = {};

      this.apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
        .then(result => {
          observer.next(result.data);
          observer.complete();
        })
        .catch(error => {
          console.log(error);
          observer.complete();
        });

    });

    return mybbobservable;
  }
}
