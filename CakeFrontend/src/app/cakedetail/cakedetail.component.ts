import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css']
})
export class CakedetailComponent implements OnInit {
  id:any
  cake:any
  constructor(private service:CakeService,private route:ActivatedRoute,private router:Router){
    this.id=this.route.snapshot.params["id"]
    console.log(this.id)

    
  }
  ngOnInit(): void {
    this.service.retrievecake(this.id).subscribe(data=>this.cake=data)
  }


}
