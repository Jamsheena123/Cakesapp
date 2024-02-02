import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
  basket:any
  constructor(private service:CakeService){

  }
  ngOnInit(): void {
    this.service.cartlist().subscribe(data=>this.basket=data)
  }

}
