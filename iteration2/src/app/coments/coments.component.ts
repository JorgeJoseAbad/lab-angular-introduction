import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  textOnComents:string='example of coment';

  coments: Array<Object>=[
    { author: 'autor1',
      comentContent: 'content of coment 1'
    },
    {
      author:'author2',
      comentContent: 'content of coment 2'
    }
  ]

}
