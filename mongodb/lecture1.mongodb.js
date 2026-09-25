use("FSD")
db.createCollection("students")
db.students.insertOne([
  { name: "Alice", 
    age: 22, 
    major: "Computer Science" }
])