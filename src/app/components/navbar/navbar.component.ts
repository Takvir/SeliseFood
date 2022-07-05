import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
  }


  filterday(day:any) {
    console.log(day)
  }
}

