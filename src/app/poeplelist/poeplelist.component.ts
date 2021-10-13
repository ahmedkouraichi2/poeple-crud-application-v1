import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-poeplelist',
  templateUrl: './poeplelist.component.html',
  styleUrls: ['./poeplelist.component.css']
})
export class PoeplelistComponent implements OnInit {

  poeplelist :any;


  constructor(private  usersService: UsersService ) { }

  ngOnInit(): void {

    this.usersService.getAllUsers().subscribe(
      // resultat afficher
      (result) =>{

       this.poeplelist=result;
      // console.log(result)
      },
      //error d'affichage
      (error)=>{
        console.log(error);



      }
    )
  }
   delete(person:any): void{
    let index = this.poeplelist.indexOf(person);
    this.poeplelist.splice(index,1);
   this.usersService.deleteUsers(person._id).subscribe(
     res=>{
       console.log(res)

     },
     error=>{
       console.log(error);
     }
   )
  }
  update(){
  
  }


}
