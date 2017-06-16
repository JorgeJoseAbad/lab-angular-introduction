import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  championships: Array<Object>=[{
      year: 1991,
      name: 'Chicago Bulls',
      champUrl: 'https://images-na.ssl-images-amazon.com/images/I/51whVRDl1XL._SY300_.jpg',
      bestPlayers: [{name:"jordan"},{name:"Scottie Pippen"},{name:"John Paxson"}]
    },{
      year: 1994,
      name: 'Houston Rockets',
      champUrl: 'https://upload.wikimedia.org/wikipedia/tr/thumb/d/de/Houston_Rockets.png/200px-Houston_Rockets.png',
      bestPlayers: [{name:"Otis Thorpe"},{name:"Hakeem Olajuwon"},{name:"Scott Brooks"}]
    },{
      year: 1999,
      name: 'Los Angeles Lakers',
      champUrl: 'http://www.thelogomix.com/files/u2/La-Lakers.jpg',
      bestPlayers: [{name:"Kobe Bryant"},{name:"A. C. Green"},{name:"Shaquille O'Neal"}]
    }

  ]

}
