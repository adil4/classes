var Human = (function () {
    function Human(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
        // this.setName(Fname);
    }
    Human.prototype.eat = function () {
    };
    Human.prototype.getAge = function () {
    };
    // setName(Fname: string){
    //     this.name = Fname;
    // }
    Human.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Human;
}());
var h = new Human('ADIL', 'ismail');
console.log('Name :', h.getFullName());
//# sourceMappingURL=classes.js.map