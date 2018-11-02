import { Component, OnInit } from '@angular/core';

import { WikiService } from '../wiki.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // search text
  searchText: string = '';

  // the number of search results from Wikipedia
  wikiResultNum = 20;
  // search results from Wikipedia
  wikiSearchResults: string[];


  

  constructor(private wikiService: WikiService, private historyService: HistoryService) {
  }

  ngOnInit() {
  }

  search() {
    if (this.searchText === '') {
      return;
    }
    
    // search from Wikipedia
    this.wikiService.searchWikipedia(this.searchText, this.wikiResultNum).subscribe(
      (response) => {
        console.log('Got search results from Wikipedia successfully!');
        console.log(response);

        this.wikiSearchResults = response;
      },
      (error) => {
        console.log(`Failed to search '${this.searchText}' on Wikipedia!`);
        console.log(error);
      }
    );


    // save the current search into history
    this.historyService.saveCurrentSearchContent(this.searchText);
        
  }
}
