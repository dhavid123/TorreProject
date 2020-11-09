import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Person } from '../classes/Person';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GlobalVariable } from '../common/globals';
import { Organization } from '../classes/Organization';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  
  private urlcors = 'https://cors-anywhere.herokuapp.com'
  private urlEndPointOfTorre = 'https://torre.co/api/opportunities';
  private urlEndPoint =  GlobalVariable.BASE_API_URL + '/api/Organization';
  
  constructor(private http: HttpClient, private _router: Router) {}

  getOrgOfTorre(opp:string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPointOfTorre}/${opp}`).pipe(
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getOrganization(): Observable<Organization[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Organization[]),
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getOrganizationById(id): Observable<Organization> {
    return this.http.get<Organization>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }


}
