import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Person } from '../classes/Person';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GlobalVariable } from '../common/globals';

@Injectable()
export class PersonService {
 
  private urlcors =  'https://cors-anywhere.herokuapp.com'
  private urlEndPointOfTorre = 'https://torre.bio/api/bios';
  private urlEndPoint =  GlobalVariable.BASE_API_URL + '/api/persons';

  constructor(private http: HttpClient, private _router: Router) {}


  getPersonOfTorre(publicId): Observable<any> {
    return this.http.get<any>(`${this.urlcors}/${this.urlEndPointOfTorre}/${publicId}`).pipe(
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getPersons(): Observable<Person[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Person[]),
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getPersonById(id): Observable<Person> {
    return this.http.get<Person>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }


  

}
