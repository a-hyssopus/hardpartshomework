function Student(name, age, avgGrade, hobbies) {
    this.name = name;
    this.age = age;
    this.avgGrade = avgGrade;
    this.hobbies = hobbies;
    this.printStudentInformation = (boolean) => {
        if (boolean) {
            console.log(this.hobbies);
        }
    }
}

let hobbies = ['walking', 'playing videogames', 'sewing', 'watching anime', 'drawing'];
let student = new Student('Lidya', '20', 10, hobbies);

const printStudentInfo = student.printStudentInformation;

const printStudentInfoBind = printStudentInfo.bind(student);
printStudentInfoBind(true);

printStudentInfo.call(student, true);

printStudentInfo.apply(student, [true]);
