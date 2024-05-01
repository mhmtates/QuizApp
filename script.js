/*let question = {
    questionText : "Hangisi javascript paket yönetim uygulamasıdır?",
    answerOptions:{
        a:"Node.js",
        b:"Typescript",
        c:"Npm",
        d:"Angular.js"
    },
    correctAnswer:"c",
    checkAnswer:function(answer){
       return answer === this.correctAnswer;

    }
}*/

function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
   
    console.log(this);
}

Question.prototype.checkAnswer = function(answer) {
    return answer === this.correctAnswer;
}

let question1 = new Question("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Angular.js" }, "c");
let question2 = new Question("Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Autofac" }, "c");

let questions = [
    new Question("Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Angular.js" }, "c"),
    new Question("Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Angular.js" }, "b"),
    new Question("Hangisi xamarin paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Angular.js" }, "b"),
    new Question("Hangisi django paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Angular.js" }, "b"),
    new Question("Hangisi .Net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Angular.js" }, "b"),
    new Question("Hangisi .Net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Angular.js" }, "b"),

];




console.log(question1.checkAnswer("c"));

// console.log(question1.questionText);
// console.log(question1.correctAnswer);

// console.log(question2.questionText);
// console.log(question2.correctAnswer);

// console.log(questions[0].questionText);

// for (let question of questions) 
// {

//     console.log(question.questionText);
// }

// console.log(question1.checkAnswer("a"));
// console.log(question2.checkAnswer("b"));
// console.log("{}");
