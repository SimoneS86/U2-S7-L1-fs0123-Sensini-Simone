class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} ${this.lastName} è più vecchio/a di ${otherUser.firstName} ${otherUser.lastName}.`;
    } else if (this.age < otherUser.age) {
      return `${otherUser.firstName} ${otherUser.lastName} è più vecchio/a di ${this.firstName} ${this.lastName}.`;
    } else {
      return `${this.firstName} ${this.lastName} ha la stessa età di ${otherUser.firstName} ${otherUser.lastName}.`;
    }
  }
}

const user1 = new User("Mario", "Rossi", 30, "Milano");
const user2 = new User("Luigi", "Verdi", 35, "Roma");
const user3 = new User("Carlo", "Gialli", 32, "Genova");
const user4 = new User("Giacomo", "Grigi", 45, "Trieste");
const user5 = new User("Stefano", "Neri", 55, "Siracusa");
const user6 = new User("Franca", "Marroni", 15, "Parigi");
console.log(user1.compareAge(user2));
console.log(user4.compareAge(user6));
console.log(user5.compareAge(user3));
