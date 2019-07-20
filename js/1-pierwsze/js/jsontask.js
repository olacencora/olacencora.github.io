let sample = 
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
}

console.log(sample);

console.log(sample.quiz.maths.q1.options[1]);

console.log(sample.quiz.maths.q1['options']);

sample.quiz.sport.q1['options'].forEach( e=> console.log(e));

for(let i=0; i<array.length; i++) {
    console.log(array[i]);
}

let tempArray = ["jacek", "ola", "maciek"];

for(let i=0; i<array.lenght; i++) {
    tempArray.push(array[i]);
}
console.log(tempArray);