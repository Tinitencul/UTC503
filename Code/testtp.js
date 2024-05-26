class School {
    constructor() {
        this.teachers = [];
        this.students = [];
        this.sessions = [];
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    addStudent(student) {
        this.students.push(student);
    }
    addSession(session) {
        this.sessions.push(session);
    }
    showTeacher(teacher) {
    toString()
        console.log(
            `Liste des Professeurs`);
        this.teachers.forEach(teacher => {
            console.log(`- numéro CPS: ${teacher.numCPS}, nom: ${teacher.name}, spécialité: ${teacher.specialty}`);
        })
    }
    showStudent(student) {
        toString()
        console.log(
            `Liste des Elèves`);
        this.students.forEach(student => {
            console.log(`- numéro CPS: ${student.numCPS}, nom: ${student.name}, age: ${student.age}, niveau: ${student.level}`);
        })
    }
    showSession(session) {
        toString()
        console.log(
            `Liste des Séssions`);
        this.sessions.forEach(session => {
            console.log(`- date : ${session.date}, durée: ${session.duration}h, avec ${session.teacher}, et les élèves : ${session.student}`);
        })
    }
}

class Teacher {
    constructor(numCPS, name, specialty) {
        this.numCPS = numCPS;
        this.name = name;
        this.specialty = specialty;
    }
}

class Student {
    constructor(numCPS, name, age, level) {
        this.numCPS = numCPS;
        this.name = name;
        this.age = age;
        this.level = level;
    }
}

class Session {
    constructor(date, duration, teacher, student) {
        this.date = date;
        this.duration = duration;
        this.teacher = teacher;
        this.student = student;
    }
}

let school = new School()

let francois = new Teacher(1111, "francois", "compétition");
let fabienne = new Teacher(2222, "Fabienne", "enfants");

let julie = new Student(3333, "Julie", 15, "indéterminer");
let julia = new Student(4444, "Julia", 16, "indéterminer");
let Tim = new Student(5555, "Tim", 17, "indéterminer");
let Tom = new Student(6666, "Tom", 18, "indéterminer");

let session1 = new Session("2024-01-01", 2, francois.name, [julie.name, julia.name]);
let session2 = new Session("2024-01-02", 3, fabienne.name, [Tim.name, Tom.name])

school.addTeacher(francois);
school.addTeacher(fabienne);
school.showTeacher()

school.addStudent(julie);
school.addStudent(julia);
school.showStudent()

school.addSession(session1);
school.addSession(session2);
school.showSession();
