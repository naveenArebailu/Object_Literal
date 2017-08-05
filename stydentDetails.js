
var student = {
    StudentName: "Naveen",
    DOB: "28",
    Skills: "js, angular, typescript",
    Address: {
        city: "Kundapura",
        state: "Karnataka",
        country: "India",
        pincode: "576383"
    }
};
student.eyecolor="Blue";
student.mother_name= "MOM";

delete student.DOB;

console.log("StudentName: "+ student.StudentName);
console.log("Skills: "+ student.Skills);
console.log("Eye color: "+ student.eyecolor);
console.log("Mother Name: "+ student.mother_name);
console.log("City: "+ student.Address.city);
console.log("State: "+ student.Address.state);
console.log("Country: "+ student.Address.country);
console.log("Pin: "+ student.Address.pincode);


