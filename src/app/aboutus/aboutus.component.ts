import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emicard } from '../emicard';
import { MyapiService } from '../myapi.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private userservice: MyapiService,private router:Router) {
}
   result: any;
  cards: Array<Emicard>;

  ngOnInit(): void {

    this.userservice.getAllEmiCard().subscribe((data) => {
      // console.log(data);
      this.result = data;
      // console.log(this.result);
      this.cards = data as Emicard[];
      console.log(this.cards);
    });


  }

}
