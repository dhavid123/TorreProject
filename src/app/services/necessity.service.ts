import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { GlobalVariable } from '../common/globals';
import { Necessity } from '../classes/Necessity';


@Injectable()
export class NecessityService {

  private urlEndPoint =  GlobalVariable.BASE_API_URL + '/api/Necessity';

  constructor(private http: HttpClient, private _router: Router) {}

  getNeeds(): Observable<Necessity[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Necessity[]),
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getNeedById(id): Observable<Necessity> {
    return this.http.get<Necessity>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  create(info: Necessity): Observable<Necessity> {
    return this.http.post(this.urlEndPoint, info).pipe(
      map((response: any) => response as Necessity),
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  update(info: Necessity): Observable<Necessity> {
    return this.http
      .put(`${this.urlEndPoint}/${info.Id}`, info)
      .pipe(
        map((response: any) => response as Necessity),
        catchError(e => {
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
  }

  delete(id: number): Observable<Necessity> {
    return this.http.delete<Necessity>(`${this.urlEndPoint}/${id}`);
  }

}
