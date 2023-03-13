function creaPet() {
  var petName = document.getElementById("petName").value;
  var ownerName = document.getElementById("ownerName").value;
  var species = document.getElementById("species").value;
  var breed = document.getElementById("breed").value;

  var pet = new Pet(petName, ownerName, species, breed);
  console.log(pet);
}

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  hasSameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return console.log("I due animali hanno lo stesso proprietario");
    } else {
      return console.log("I due animali hanno proprietari diversi");
    }
  }
}

var pet1 = new Pet("Fido", "Mario Rossi", "Cane", "Pastore Tedesco");
var pet2 = new Pet("Belle", "Maria Bianchi", "Gatto", "Siamense");
var pet3 = new Pet("Toby", "Maria Bianchi", "Scimmia", "Gorilla");
var pet4 = new Pet("Whiskers", "Marco Verde", "Cane", "Labrador");

pet1.hasSameOwner(pet2);
pet2.hasSameOwner(pet3);
pet4.hasSameOwner(pet1);
