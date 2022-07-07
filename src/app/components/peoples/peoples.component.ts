import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  users: string[] = [
    'Mahbub Ahmed',
    'Raquib Hassan',
    'Nabil Shahid',
    'Mazharul Parash',
    'Azizul Hoq',
    'Naymul Hoque',
    'Takvir Alam',
    'Jahid Mahmud',
    'Towfiqul Islam',
    'Tanjil Hossain',
    'Saiful Islam (Suvroo)',
    'Atia As Samia',
    'Shafin Khan',
    'Sohanur Rahman',
    'Muhammad Habibullah',
    'Meraj Siddiqui',
    'Satata Satez',
    'Md Harun Al Kawser',
    'Solaiman Shadin',
    'Anwarul Islam',
    'Zobaidur Rahman',
    'Rakinul Huq',
    'Aumit Hasan',
    'Milon Hossain',
    'Arifur Rahman',
    'Saif Zaman (Maruf)',
    'Md. Maruf Rahman',
    'Devasish Ghosh',
    'Nayeem Hasan',
    'Shohag Mia',
    'Mahmudur Pavel',
    'Abaan Siddiqi',
    'Sadia Islam',
    'Waseque Abdullah',
    'Naieem Mahmud',
    'Rounak Aftab',
    'Farhan Haque',
    'Nabil Shahid',
    'Zarin Tasnim',
    'Adil Reza',
    'Numan Ibn Mazid',
    'Arindam Kabir',
    'Mohasin Chowdhury',
    'Rifat Nawshin',
    'Abdul Hai',
    'Saiful Islam',
    'Poran Chowdury',
    'Shaon Karim',
    'Faiza Alam',
    'Omar Faruque',
    'Fabiha Tabassum',
    'Sabit Safiullah',
    'Sheikh Faysal',
    'Tahrima Oannahary',
    'Maisha Farzana',
  ];
  filteredList : any [] = []
  selecteduser:string  = ''
  constructor() { }

  ngOnInit(): void {
   this.filteredList= this.users.sort()
   this.selecteduser = ''
  }
  selectUser(user:string) {
    this.selecteduser = user
  }
  search(letter:string) {
    this.filteredList= []
    this.users.forEach(user => {
      const str = user
      const res = str.startsWith(letter);
      if(res) {
        this.filteredList.push(user)
      }
    })
  }
  showList() {
    this.selecteduser = ''
  }

}
