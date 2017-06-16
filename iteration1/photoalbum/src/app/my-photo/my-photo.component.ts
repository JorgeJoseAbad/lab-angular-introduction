import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-photo',
  templateUrl: './my-photo.component.html',
  styleUrls: ['./my-photo.component.css']
})
export class MyPhotoComponent implements OnInit {

  constructor() { }


  photos: Array<Object> = [{
      id: 1,
      image: "http://www.mescoloriages.com/imagier/images/taureau.jpg",
      description:'Nacimiento'
  },{
      id: 2,
      image:"http://www.mescoloriages.com/imagier/images/taureau.jpg",
      description: 'bautizo'
  },{
      id: 3,
      image: "http://www.mescoloriages.com/imagier/images/taureau.jpg",
      description: 'comunion'
  },{
      id: 4,
      image: "https://cdn.pixabay.com/photo/2015/05/22/05/52/cat-778315_1280.jpg",
      description: 'black-cat'
  },{
      id:5,
      image:"http://images.freeimages.com/images/previews/5e4/cat-1400324.jpg",
      description: 'cat retrato'
  },
  {
      id:5,
      image:"http://images.freeimages.com/images/previews/fc1/cat-1380753.jpg",
      description: 'tiger-cat'
  }
 ];

  ngOnInit() {
  }

}
