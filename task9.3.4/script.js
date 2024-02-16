//Удаление одного свойства из объекта

let student =  {
    name: "Ivan Petrov",
    course: "javascript",
    group: 5
};
console.log(student.name);
delete student.name;
console.log(student.name);


let secondStudent =  {
    name: "Ivan Petrov",
    course: "javascript",
    group: 5
};
console.log(student.course);
delete student.course;
console.log(student.course);


let thirdStudent =  {
    name: "Ivan Petrov",
    course: "javascript",
    group: 5
};
console.log(student.group);
delete student.group;
console.log(student.group);