var Human = (function () {
    function Human(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    Human.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Human;
}());
var h = new Human('ADIL', 'ismail');
console.log(h);
console.log('Name :', h.getFullName());
//# sourceMappingURL=classes.js.map