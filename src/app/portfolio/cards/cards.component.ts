import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() posts = [] as any

  active = ''

  SortPotsByTitle(){
    this.posts.sort((a:any, b:any) => (a.title > b.title) ? 1 : -1)
    return this.active = 'title'
  }
  SortPostsByTitleReverse(){
    this.posts.sort((a:any, b:any) => (a.title > b.title) ? -1 : -1)
    return this.active = 'reverse'
  }
  SortPostsByNewAdded(){
    this.posts.sort((a:any, b:any) => (a.id > b.id) ? 1 : -1)
    return this.active = 'newAdded'
  }

  SortPostsByLastAdded(){
    this.posts.sort((a:any, b:any) => (a.id > b.id) ? -1 : 1)
    return this.active = 'lastAdded'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
