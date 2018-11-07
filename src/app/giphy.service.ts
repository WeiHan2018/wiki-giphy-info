import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  giphyKey = 'ZD1QXywzsuiQJWFtHQ2ZGHjhc33QljzY';

  /* 'https://api.giphy.com/v1/gifs/search?api_key=ZD1QXywzsuiQJWFtHQ2ZGHjhc33QljzY&q=&limit=5&offset=0&rating=G&lang=en' */
  // base url for Giphy API
  giphyBaseUrl = 'https://api.giphy.com/v1/gifs/search?';
  // API key
  giphyApiKeyParam = `api_key=${this.giphyKey}`;
  // url param for search text
  searchTextParam = '&q=';
  // url param for the number of search results
  resultNumParam = '&limit=';
  // constant url params
  constantUrlParams = '&offset=0&rating=G&lang=en';

  
  constructor(private http: HttpClient) { }

  searchGiphy(searchText: string, giphyResultNum: number): Observable<any> {
    let queryUrl = `${this.giphyBaseUrl}${this.giphyApiKeyParam}${this.searchTextParam}${searchText}${this.resultNumParam}${giphyResultNum}${this.constantUrlParams}`;
    
    return this.http.get(queryUrl).pipe(
      map(response => response['data'].map(res => res['images']['original']['url']))
    );
  }
}
