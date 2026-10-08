let students = [ { name: "John", marks: 85, grade: "A" },
{ name: "David", marks: 72, grade: "B" },
{ name: "Peter", marks: 90, grade: "A+" },
{ name: "Sarah", marks: 65, grade: "C" }];

// students.forEach((s)=>{
//     console.log(s.name+" - "+s.marks+" - "+s.grade);
    
// })


// let studentNames=students.map((student)=>{
//    return student.name
    
// })
// console.log("\n Student names");
// console.log(studentNames);





let Scored=students.filter((student)=>{
    return student.marks>=80
})
console.log(Scored);
