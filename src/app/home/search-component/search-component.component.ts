import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  @Output()
  search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(val: string) {
    this.search.emit(val);
  }

}
