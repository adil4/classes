class Human {
    firstName: string
    lastName: string
    age: number
    constructor(firstname: string,lastname: string){
        this.firstName = firstname;
        this.lastName = lastname;
        // this.setName(Fname);
    }

    eat(){

    }
    getAge(){

    }
    // setName(Fname: string){
    //     this.name = Fname;
        
    // }
    getFullName() : string {
        return this.firstName + ' ' + this.lastName
    }
}

const h = new Human('ADIL','ismail')

console.log('Name :', h.getFullName());