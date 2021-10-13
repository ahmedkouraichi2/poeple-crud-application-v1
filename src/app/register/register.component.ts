import { visitAll } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup
  errorReapssword:string;

  constructor(private fb:FormBuilder,private userService:UsersService,private router:Router) {
    let formControls={
      firstName : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z ]*"),
        Validators.minLength(2)
      ]),

      lastname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z ]*"),
        Validators.minLength(5)
      ]),

      email:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z ]*"),
        Validators.minLength(10)

      ]),

      phone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]*"),
        Validators.minLength(5)
      ]),

      password:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
      ]),

      repassword:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
      ]),




    }
    // register Form est le resultat de FormBuilder et la foncion Groop(formControl)
  this.registerForm= this.fb.group(formControls);
   }
   getfirstName(){
     return this.registerForm.get('firstName');
   }
   getlastname(){
     return this.registerForm.get('lastname')
   }
   getemail(){
     return this.registerForm.get('email')
   }
   getphone(){
     return this.registerForm.get('phone')
   }
   getpassword(){
     return this.registerForm.get('password')
   }



  ngOnInit(): void {

  }

  //fonction register de user
  register(){

    //tester les valeur de formulaire
    console.log(this.registerForm.value);
    //data varibale qui prent les Valeur des formulaire
    let data= this.registerForm.value;
    //user instance de User qui prent les Valeur des data
    let user = new User(data.firstname,data.lastname,data.email,data.phone,data.password);
   //afficher les Valeur de user
    console.log(user);
    this.userService.gesisterAdmin(user).subscribe(
      (res)=>{
        this.router.navigate(['poeple'])

      },
      (error)=>{
        console.log(error)

      }
    )

  }


}
