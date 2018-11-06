import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  
  /* 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=' */
  // base url for Wikipedia API
  wikiBaseUrl: string = 'https://en.wikipedia.org/w/api.php?';
  // constant url params
  constantUrlParams = 'action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*';
  // url param for the number of search results
  resultNumParam = '&srlimit=';
  // url param for search text
  searchTextParam = '&srsearch=';
  

  constructor(private http: HttpClient) {

  }

  searchWikipedia(searchText: string, wikiResultNum: number): Observable<any> {
    let queryUrl = `${this.wikiBaseUrl}${this.constantUrlParams}${this.resultNumParam}${wikiResultNum}${this.searchTextParam}${searchText}`;
    
    return this.http.get(queryUrl).pipe(
      map(response => response['query'].search.map(res => res['title'])
      )
    );
  }
}
