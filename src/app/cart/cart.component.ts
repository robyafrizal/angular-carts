import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cartItems: any;
  added: any;

  constructor() {}

  ngOnInit() {
    this.initiateData();
  }
  initiateData() {
    let data = localStorage.getItem("cart");
    if (data !== null) {
      this.cartItems = JSON.parse(data);
      this.added = 0;
      for (let i in this.cartItems) {
        this.cartItems[i]["qt"] = 1;
        this.added =
          this.added + this.cartItems[i].price * this.cartItems[i].qt;
      }
    } else {
      this.cartItems = [];
    }
  }
  updateTotal() {
    this.added = 0;
    for (let i in this.cartItems) {
      this.added = this.added + this.cartItems[i].price * this.cartItems[i].qt;
    }
  }

  removeItem(id) {
    this.cartItems.splice(id, 1);
    if (this.cartItems.length) {
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    } else {
      localStorage.setItem("cart", null);
    }
  }

  addedToCart() {
    if (this.cartItems.length) {
      localStorage.removeItem("cart");
      this.initiateData();
      alert("Your add to cart is: " + this.added);
    } else {
      alert("No items in cart");
    }
  }
}
