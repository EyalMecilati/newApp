import { HomePage } from './../home/home.page';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  public baseUrl: string = environment.baseUrl;
  public apiKey: string = environment.apiKey;
  public selectedArticle:any;
  constructor(private http: HttpClient) { }

  getHeadings(countryCode, category): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/top-headlines?apiKey=${this.apiKey}&country=${countryCode}&category=${category}`)
  }
}
