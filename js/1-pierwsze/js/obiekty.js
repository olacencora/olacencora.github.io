let user = {
    name: 'jacek',
    age: 29,
    print(){
        console.log(this.name); //wywołujemy klucz
    },
    secondName: 'marcin', /*dodanie nowego klucza*/
};
console.log(user.print()); /*sprawdzenie metody*/

user.printTwo = function() {
    console.log(this.secondName);
    return this.secondName;
}
user.todayDay = '20.07.2019';

console.log(user.printTwo());

console.log(user);