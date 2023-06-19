import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, filter, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Azienda } from 'src/app/model/azienda';

@Injectable({
  providedIn: 'root'
})
export class AziendaService {

  private aziendaUrl = 'http://localhost:8080/coge/api/azienda';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  getAll(): Observable<Azienda[]> {
    return this.http.get<Azienda[]>(this.aziendaUrl)
      .pipe(
       catchError(this.handleError<Azienda[]>('getAll', []))
      );
  }

  findById(id: number): Observable<Azienda> {
    const url = `${this.aziendaUrl}/${id}`;
      return this.http.get<Azienda>(url).pipe(
        catchError(this.handleError<Azienda>(`get id=${id}`))
      );
    }

  /** POST: add a new hero to the server */
  add(azienda: Azienda): Observable<Azienda> {
    return this.http.post<Azienda>(this.aziendaUrl, azienda, this.httpOptions).pipe(
      catchError(this.handleError<any>('add'))
    );
  }

  /** DELETE: delete the hero from the server */
  delete(id?: number): Observable<Azienda> {
    const url = `${this.aziendaUrl}/${id}`;
    return this.http.delete<Azienda>(url, this.httpOptions).pipe(
      catchError(this.handleError<Azienda>('delete'))
    );
  }

  /** PUT: update the hero on the server */
  update(azienda: Azienda): Observable<any> {
    const url = `${this.aziendaUrl}/${azienda.id}`;
    return this.http.put(url, azienda, this.httpOptions).pipe(
      catchError(this.handleError<any>('update'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}