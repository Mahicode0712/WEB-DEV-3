use("FSD")
// db.createCollection("students")
// db.students.insertOne([
//   { name: "Alice", 
//     age: 22, 
//     major: "Computer Science" }
// ])
// insertmany for many document
// db.students.insertMany([
//     {
//         "name": "Muskan",
//         "age": 19,
//         "email":"muskan@example.com"
//     },
//     {
//         "name": "Rohit",
//         "age": 20,
//         "email":"rohit@example.com"
//     },
//     {
//         "name": "Anjali",
//         "age": 21,
//         "email":"anjali@example.com"

//     },
//    {
//     "name": "Diksha",
//     "age": 22,
//     "email":"diksha@example.com"
//    }
// ])

// // it is used to find the matched document from the collection
// db.students.find({"name":"Muskan"})

// db.students.findOne({"name":"Muskan"})

// db.students.updateOne(
//     {"name":"Anjali"},
//     {
//         $set:{"age":22}
//     }
// )

// db.students.updateMany(
//     {'name':"Rohit"},
//     {"age":{$gt:20}},
//     {
//         $set:{"major":"Mathematics"},
//     }
// ) 

// //it is used to delete the document from the collection
// db.students.deleteOne({"name":"Diksha"})
// // it is used to delete the matched document from the collection
// db.students.deleteMany({"age":{$gt:20}})
