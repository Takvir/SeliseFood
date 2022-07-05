import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-food',
  templateUrl: './user-food.component.html',
  styleUrls: ['./user-food.component.css']
})
export class UserFoodComponent implements OnInit {

  // foods: any[] = [
  //   {

  //     'name': 'White Rice',
  //     'availabity' : [
  //       'Sunday', 'Monday', 'Wednesday' , 'Thursday'
  //     ]
  //   },
  //   {
  //     'name': 'Beef Curry',
  //     'availabity' : [
  //       'Thursday'
  //     ]
  //   },
  //   {
  //     'name': 'Chicken Curry',
  //     'availabity' : [
  //       'Sunday', 'Monday', 'Wednesday' , 'Thursday'
  //     ]
  //   },
  //   {
  //     'name': 'Plain Polao',
  //     'availabity' : [
  //       'Tuesday'
  //     ]
  //   },

  //   {
  //     'name': 'Chicken Roast',
  //     'availabity' : [
  //       'Tuesday'
  //     ]
  //   },
  //   {
  //     'name': 'Daal',
  //     'availabity' : [
  //       'Sunday', 'Monday', 'Wednesday' , 'Thursday'
  //     ]

  //   },
  //   {
  //     'name': 'Vegetable',
  //     'availabity' : [
  //       'Sunday', 'Monday', 'Wednesday' , 'Thursday'
  //     ]
  //   },
  //   {
  //     'name': 'Egg Curry',
  //     'availabity' : [
  //       'Tuesday'
  //     ]
  //   }];

  foods = {
    Sunday:  [
      {
        name:"Rice",
        imageURL:'../../../assets/img/rice.jpg'
      },
      {
        name:"Egg",
        imageURL:'../../../assets/img/egg.jpg'
      },
      {
        name:"Chicken",
        imageURL:'../../../assets/img/chicken.jpg'
      },
      {
        name:"Beef",
        imageURL:'../../../assets/img/beef.jpg'
      }],
    Monday:  [
      {
        name:"Rice",
        imageURL:'../../../assets/img/rice.jpg'
      },
      {
        name:"Egg",
        imageURL:'../../../assets/img/egg.jpg'
      },
      {
        name:"Chicken",
        imageURL:'../../../assets/img/chicken.jpg'
      },
      {
        name:"Beef",
        imageURL:'../../../assets/img/beef.jpg'
      }],
    Tuesday: [
      {
        name:"Rice",
        imageURL:'../../../assets/img/rice.jpg'
      },
      {
        name:"Egg",
        imageURL:'../../../assets/img/egg.jpg'
      },
      {
        name:"Chicken",
        imageURL:'../../../assets/img/chicken.jpg'
      },
      {
        name:"Beef",
        imageURL:'../../../assets/img/beef.jpg'
      },
      {
        name:"Daal",
        imageURL:'../../../assets/img/Daal.jpg'
      },
      {
        name:"Vegetable",
        imageURL:'../../../assets/img/Vegetable.jpg'
      },
    ],
    WednesDay: [
      {
        name:"Rice",
        imageURL:'../../../assets/img/rice.jpg'
      },
      {
        name:"Egg",
        imageURL:'../../../assets/img/egg.jpg'
      },
      {
        name:"Chicken",
        imageURL:'../../../assets/img/chicken.jpg'
      },
      {
        name:"Beef",
        imageURL:'../../../assets/img/beef.jpg'
      }],
    Thursday:  [
      {
        name:"Rice",
        imageURL:'../../../assets/img/rice.jpg'
      },
      {
        name:"Egg",
        imageURL:'../../../assets/img/egg.jpg'
      },
      {
        name:"Chicken",
        imageURL:'../../../assets/img/chicken.jpg'
      },
      {
        name:"Beef",
        imageURL:'../../../assets/img/beef.jpg'
      }],
    Friday:  [
      {
        name:"Rice",
        imageURL:'../../../assets/img/rice.jpg'
      },
      {
        name:"Egg",
        imageURL:'../../../assets/img/egg.jpg'
      },
      {
        name:"Chicken",
        imageURL:'../../../assets/img/chicken.jpg'
      },
      {
        name:"Beef",
        imageURL:'../../../assets/img/beef.jpg'
      }],
    Saturday: [
      {
        name:"Rice",
        imageURL:'../../../assets/img/rice.jpg'
      },
      {
        name:"Egg",
        imageURL:'../../../assets/img/egg.jpg'
      },
      {
        name:"Chicken",
        imageURL:'../../../assets/img/chicken.jpg'
      },
      {
        name:"Beef",
        imageURL:'../../../assets/img/beef.jpg'
      }],
  }

  myChoices: any[] = []

  foodList: any[] = []
  selectedFoods: any = []

  isDisabled!: false;


  constructor() { }

  ngOnInit(): void {
    this.getDayName()
  }
  getDayName() {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "WednesDay",
      "Thursday",
    ];
    var dayname = days[new Date().getDay()];
    type ObjectKey = keyof typeof this.foods;
    const key = dayname as ObjectKey;
    this.selectedFoods = this.foods[key]
    this.foodList = this.selectedFoods.map((food: any) => {
      return {
        name:food.name,
        imageURL:food.imageURL,
        isSelected: false
      }
    })
  }

  selectedFood(food: any) {
    const name = food.name
    let index = this.foodList.findIndex((food) => food.name == name);
    this.foodList[index].isSelected = !this.foodList[index].isSelected
    debugger
    if(this.foodList[index].isSelected) {
      this.myChoices.push(name)
    }
    if(!this.foodList[index].isSelected) {
     let ind = this.myChoices.findIndex(choice => choice === food.name)
     if(ind>-1) {
       this.myChoices.splice(ind,1)
     }
    }
    console.log(this.myChoices)
  }


}