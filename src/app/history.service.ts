import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  // user search history
  searchHistory: any[] = [];

  constructor() { }

  saveCurrentSearchContent(searchText: string) {
    let searchItem = {
      searchText: searchText,
      timestamp: new Date()
    };
    this.searchHistory.push(searchItem);
  }

  getSearchHistory(): any[] {
    return this.searchHistory;
  }
}
