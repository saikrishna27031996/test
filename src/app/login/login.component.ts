import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service'
import {UserDetails} from '../login-meta';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetails: UserDetails = new UserDetails();
  constructor(private testService: TestService,  private route: ActivatedRoute,
    private router: Router ){

  }
  userName: string= '';
  password: string = '';
  ngOnInit(){
    this.testService.getQestions().subscribe(data => console.warn(data));
  }
   onSubmit(){
   if(this.userName == "admin" && this.password == "admin"){
    localStorage.setItem('userName',this.userName );
    console.log(localStorage.getItem('userName'))
       this.router.navigate(['questionsList'],{ relativeTo: this.route });
     }else{
       alert('Invalid User Name or Password')
     }

   }
  }
