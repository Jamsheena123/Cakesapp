import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {
  cakes:any
  constructor(private service:CakeService){

  }
  ngOnInit(): void {
    this.service.getAllCakes().subscribe(data=>this.cakes=data)
  }

}
