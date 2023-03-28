// //Question 1
// function question1 (n) {
//     for (let i=1; i <= n; i++) {
//         console.log (i)
//     }
// }
// question1 (9);

// //Question 2
// function question2 (n) {
//     if (n <= 0) {
//         console.log ('Invalid')
//     } else {
//         for (let i=1; i <= n; i++) {
//             console.log (i)
//         }
//     }
// }
// question2 (9);

// //Question 3
// function question3 (array3, n) {
//     let newarray3 = [];
//     for (let i = 0; i < array3.length; i++) {
//         newarray3.push(array3[1]);
//         newarray3[i] = n;
//     }
//     console.log(newarray3)
// }
// question3 ([1, 2, 3, 4, 5],9);

// //Question 4
// function question4 (array3, n) {
//     let newarray4 = [];
//     for (let i = 0; i < array3.length; i++) {
//         newarray4.push(array3[1]);
//         newarray4[i] = n;
//     }
//     console.log(array4);
//     console.log(newarray4)
// }
// question4 ([1, 2, 3, 4, 5],9);

// //Question 5
// function question5 (array5) {
//     let newarray5 = [];
//     let first = array5[0];
//     let last = array5.length - 0;
//     if (first > last) {
//         for (let i = 0; i < array5.length; i++) {
//             let x = first;
//             newarray5.push(array5[1]);
//             newarray5[i] = x;
//         }
//         console.log(newarray5)
//     } else {
//         for (let i = 0; i < array5.length; i++) {
//             let x = last;
//             newarray5.push(array5[1]);
//             newarray5[i] = x;
//         }
//         console.log(newarray5)
//     }
// }
// question5 ([1, 2, 3, 4, 5]);

//Question 6
function question6 (array6) {
    let newarray6 = [];
    let first = array6[0];
    let last = array6.length - 0;
    if (first > last) {
        for (let i = 0; i < array6.length; i++) {
            let x = first;
            newarray6.push(array6[1]);
            newarray6[i] = x;
        }
        console.log(newarray6)
    } else {
        for (let i = 0; i < array6.length; i++) {
            let x = last;
            newarray6.push(array5[1]);
            newarray6[i] = x;
        }
        console.log(newarray5)
    }
}
question6 ([1, 2, 3, 4, 5]);