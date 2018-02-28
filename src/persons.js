class Persons {
    constructor(initialData){
        this._persons = initialData;
    }

    set addPerson(p){
        this._persons.push(p);
    }

    getPersonById(i) {
        return this._persons[i];
    }
    
    getPersons() {
        return this._persons;
    }
}

//Setup some dummy test persons
const initialData = [
    {firstName: "Kurt", lastName: "Wonnegut", favoriteSport: "Socker"},
    {firstName: "Jan", lastName: "Peterson", favoriteSport: "Hockey"},
    {firstName: "Jane", lastName: "Peterson", favoriteSport: "Skating"},
    {firstName: "John", lastName: "Hansen", favoriteSport: "Socker"},
  ]

const persons = new Persons(initialData);
window.persons = persons; //Only for debugging

export default persons;