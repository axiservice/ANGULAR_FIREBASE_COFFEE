import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OrdersService } from "../shared/orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  constructor(public ordersService: OrdersService) {}

  ngOnInit() {}

  coffees = [
    {"QT":1,"NA":"Americano"},
    {"QT":2,"NA":"Flat White"},
    {"QT":3,"NA":"Cappuccino"},
    {"QT":4,"NA":"Latte"},
    {"QT":5,"NA":"Espresso"},
    {"QT":6,"NA":"Machiato"},
    {"QT":7,"NA":"Mocha"},
    {"QT":8,"NA":"Hot Choc"},
    {"QT":9,"NA":"Tea"}
  ];

  coffeeOrder = [];
  countElemento = 0;

  addCoffee = coffee => {
    //this.coffeeOrder.push(coffee);
    this.coffeeOrder.push({"id":++this.countElemento,"item":coffee});
  }

  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  plusCoffee = coffee => {
   this.coffeeOrder.forEach(function(i){
      if(i.id===coffee.id){i.item.QT++;}
    });
  };

  plusCoffee2 = coffee => {
    coffee.item.QT++;
  };


  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }
}
