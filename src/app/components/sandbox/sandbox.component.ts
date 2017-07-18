import { Component } from '@angular/core'

import { DataService } from '../../services/data.service'


@Component({
    selector: 'sandbox',
    templateUrl: 'sandbox.component.html'
})

export class SandboxComponent{

 users: any[] = []
 
 user = {
     id: '',
     name: '',
     email: '',
     phone: ''
 }

 isEdit: boolean = false

  constructor(public dataService: DataService){
    this.dataService.getUsers().subscribe( users => {
        this.users = users
    })
  }

  onSubmit(isEdit){
    if(!isEdit) {
        console.log('add')
        this.dataService.addUser(this.user).subscribe( user => {
            console.log(user)
            this.users.unshift(user)
        }) 
    } else{
        console.log('update')
        this.dataService.updateUser(this.user).subscribe( user => {
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].id == this.user.id ){
                    this.users.splice(i,1)
                }
             }  
             this.users.unshift(user)
        }) 
    }
    
  }

  onDelete(id){
     this.dataService.deleteUser(id).subscribe( res => {
         for(let i = 0; i < this.users.length; i++){
             if(this.users[i].id == id ){
                 this.users.splice(i,1)
             }
         }
     })
  }

  onEdit(user){
    this.isEdit = true
    this.user = user
  }

}
