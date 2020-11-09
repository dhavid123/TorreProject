import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { GlobalVariable } from '../common/globals';
import { Proposal } from '../classes/Proposal';

@Injectable()
export class ProposalService {
  
  private urlEndPoint =  GlobalVariable.BASE_API_URL + '/api/Proposal';
  constructor(private http: HttpClient, private _router: Router) {}

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Proposal[]),
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  getProposalById(id): Observable<Proposal> {
    return this.http.get<Proposal>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  create(info: Proposal): Observable<Proposal> {
    return this.http.post(this.urlEndPoint, info).pipe(
      map((response: any) => response as Proposal),
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  update(info: Proposal): Observable<Proposal> {
    return this.http
      .put(`${this.urlEndPoint}/${info.Id}`, info)
      .pipe(
        map((response: any) => response as Proposal),
        catchError(e => {
          Swal.fire(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
  }

  delete(id: number): Observable<Proposal> {
    return this.http.delete<Proposal>(`${this.urlEndPoint}/${id}`);
  }





}
