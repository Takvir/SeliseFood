import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  time = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  date = new Date().toDateString();

  users: string[] = [
    'Takvir Alam',
    'Jahid Mahmud',
    'Nabil Shahid',
    'Azizul Hoq',
    'Naymul Hoque',
  ];

  constructor() { }

  ngOnInit(): void {

    this.users.sort()
    
    setInterval(() => {this.time = new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    console.log(this.time);
    this.date = new Date().toDateString();
    
    }, 1000);
  
  }


  filterday(day:any) {
    console.log(day)
  }
}

