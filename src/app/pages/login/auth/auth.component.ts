import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  cosas:any[] = []
  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['home']);
  }

}
