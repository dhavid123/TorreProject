import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Area } from '../classes/Area';
import { GlobalVariable } from '../common/globals';

@Injectable()
export class AreaService {

  private urlEndPoint =  GlobalVariable.BASE_API_URL + '/api/Area';

  constructor(private http: HttpClient, private _router: Router) {}


  getAreas(): Observable<Area[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Area[]),
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
}
