import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Therapeute } from 'src/model/Therapeute.model';

@Injectable({
  providedIn: 'root'
})
export class TherapeuteService {

  urlBack = environment.urlBack;

  constructor(private http : HttpClient) { }

 //Get All therapeute
  public getAllTherapeutes(): Observable<Therapeute[]> {
    return this.http.get<Therapeute[]>(this.urlBack + 'therapeutes/');
  }

  //get therapeutesById
  public getTherapeute(id: number): Observable<Therapeute> {
    return this.http.get<Therapeute>(this.urlBack + 'therapeutes/' + id);
  }

  //create therapeute
  public postTherapeute(formData: FormData): Observable<Therapeute> {
    return this.http.post<Therapeute>(this.urlBack + 'therapeutes/', formData);
  }

  //update therapeute
  public putTherapeute(id: number, formData: FormData): Observable<Therapeute> {
    return this.http.put<Therapeute>(this.urlBack + 'therapeutes/' + id, formData);
  }

  //delete therapeute
  public deleteTherapeute(id: number) {
    return this.http.delete(this.urlBack + 'therapeutes/' + id);
  }
}
