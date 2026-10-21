use("FSD")

// will get all the data 
// db.students.find({
//     attendance:{
//         $gt: 75,
//         $lte:90
//     }
// })

// db.students.find({
//     "age":{
//         $eq: 18
//     }
// })

// db.students.find({
//     "age": {
//         $ne: 18
//     }
// })

// Logical Operators

// And operater works like this only , to retrive students whose course is cse and they are female 
// db.student.find(
//     {"course":"CSE",
//         "gender":"Female"}
// )

// OR operator - ek bhi true hogi to value return hogi
// db.students.find({
//     $or:[
//         {"course":"CSE"},
//         {"gender":"Female"}

//     ]
// })

// Projection - kya dikhne wala hai jo hum dekhna chahte hai data to sara hi rehega bus jo chahiye wo data hi aayega 

// db.students.find({},{
//     _id:0,
//     studentId:1,
//     name:1,
//     course:1
// })

// db.students.find().limit(3) // limit will limit the data to 3 only


db.students.find().skip(3).limit(6) // skip will skip the first 3 data and limit will limit the data to 3 only