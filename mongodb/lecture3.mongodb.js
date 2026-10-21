use("FSD")
// db.students.aggregate([
//     {
//         $group:{
//             _id:"$course",
//             maximumMathMarks:{
//                 $max:"$marks.math"
//             }
//         }
//     }
// ])

// db.students.aggregate([
//     {
//         $group:{
//             _id:"$course",
//             minmathmarks:{
//                 $min:"$marks.math"
//             }
//         }
//     }
// ])

//find the total number of students in each city 
// db.students.aggregate([
//     {
//         $

//     }
// ])

// find the average attendance of cse students
// db.students.aggregate([
//     {
//         $match: {
//             "course":"CSE"

        
//         },
//         {
//             $group:{
//                 id:null,
//                 avgAttendance:{
//                     $avg:"$attendance"
//         }

//             }
//         }
//     }
// ])

// db.students.aggregate([
//     {
//         $project:{
//             name:1,
//             course:1,
//             "marks.math":1
//         }
//     }
// ])

db.students.aggregate([
    {
        $project:{
            name:1,
            totalMarks:{
                $add:["$marks.math","$marks.science","$marks.english"]
            }
        }
    }
])