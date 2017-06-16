import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }
  title: string='this is the title';
  image: string='https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/img_0524a.jpg?itok=_72P6Kl3';
  comments: string='coments about image';

}
