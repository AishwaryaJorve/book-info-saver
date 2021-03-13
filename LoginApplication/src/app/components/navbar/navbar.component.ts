import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

navBarData:string;

  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onClickHome(){
    this.router.navigate(['../login'],{relativeTo:this.route});
  }

  onClickDashboard(){
    this.router.navigate(['../dashboard'],{relativeTo:this.route});

  }

  onClickAddBook(){
    this.router.navigate(['../addbook'],{relativeTo:this.route});
  }

  onClickShowAllBook(){
    this.router.navigate(['../showbooks'],{relativeTo:this.route});
  }

  functionName($event){}

}
