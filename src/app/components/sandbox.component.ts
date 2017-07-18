import { Component } from '@angular/core'

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello {{ name }} is {{ age }} years old</h1>
        <h2>My name is {{ person.firstName }} {{ person.lastName }}</h2>
    `
})

export class SandboxComponent{
    name = 'Rodrigo Macedo'
    age = 23
    person = { firstName: 'Rodrigo', lastName: 'Macedo'}

    constructor(){
        
    }
}