import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor( private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  adminControl(){
    if(this.authService.getCurrentRoles()=="admin"){
      return true;
    }
    else{
      this.router.navigate(["/cars"]).then((c) => {});

          return false;
    }
  }

}
