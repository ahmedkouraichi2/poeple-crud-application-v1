import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  adduserForm :FormGroup;
  constructor(private fb:FormBuilder,private userService:UsersService,private router :Router) {
    let FormControls={
      firstName:new FormControl(
        '',[Validators.required,
        Validators.minLength(2)]

        ),
      lastName:new FormControl(
        '',[Validators.required,
          Validators.minLength(2)]
      ),
      phone: new FormControl(
        '',[Validators.required,
          Validators.minLength(2)]

      )
    }


   this.adduserForm=this.fb.group(FormControls);

  }





  ngOnInit(): void {
  }

  getfirstName(){
    return this.adduserForm.get('firstname')
  }
  getlastName(){
    return this.adduserForm.get('lastname')
  }
  getphone(){
    return this.adduserForm.get('phone')
  }


  addUser(){
    console.log(this.adduserForm.value);
    let data = this.adduserForm.value;
    let user = new User(data.firstName,data.lastName,'',data.phone,'');
    this.userService.addUers(user).subscribe(
      (res)=>{
        console.log(res)
        this.router.navigate(['/poeple'])


      },
      (error)=>{
        console.log(error);
        this.router.navigate(['/login'])

      }
    )

  }


}
