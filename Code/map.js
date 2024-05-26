const students = [

    {name :' Karine Deckow',age:31},
    {name :'Pansy Predovic',age:23},
    {name :'Noe Medhurst',age :20},
    {name :'Vidal Metz',age :17},
    {name :'Cayla Streich',age:42}

]
const getName = student => student.name
const getStudentsNames = students.map(getName)

getStudentsNames(students);
