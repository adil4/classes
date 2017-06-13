class Human {
    firstName: string
    lastName: string
    age: number
    constructor(firstname,lastname){
        this.firstName = firstname;
        this.lastName = lastname;
    }
    
    getFullName() : string {
        return this.firstName + ' ' + this.lastName
    }
}

const h = new Human('ADIL','ismail')
console.log(h)
console.log('Name :', h.getFullName());