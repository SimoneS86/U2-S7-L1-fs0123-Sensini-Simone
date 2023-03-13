function creaPet() {
  let list = document.getElementById("list");
  let petName = document.getElementById("petName").value;
  let ownerName = document.getElementById("ownerName").value;
  let species = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;

  let pet = new Pet(petName, ownerName, species, breed);
  let petString = JSON.stringify(pet);
  list.innerText += petString;
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

let pet1 = new Pet("Fido", "Mario Rossi", "Cane", "Pastore Maremmano");
let pet2 = new Pet("Belle", "Maria Bianchi", "Gatto", "Siamense");
let pet3 = new Pet("Toby", "Maria Bianchi", "Scimmia", "Gorilla");
let pet4 = new Pet("Whiskey", "Marco Verde", "Cane", "Labrador");

pet1.hasSameOwner(pet2);
pet2.hasSameOwner(pet3);
pet4.hasSameOwner(pet1);
