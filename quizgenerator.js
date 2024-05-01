
function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;

}

Question.prototype.checkAnswer = function (answer) {
    return answer === this.correctAnswer;
}



let questions = [
    new Question("1)Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Angular.js" }, "c"),
    new Question("2)Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Angular.js" }, "b"),
    new Question("3)Hangisi xamarin paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Angular.js" }, "b"),
    new Question("4)Hangisi django paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Angular.js" }, "b"),
    new Question("5)Hangisi .Net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Angular.js" }, "b"),
    new Question("6)Hangisi .Net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "Angular.js" }, "b"),

];

function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}



const quiz = new Quiz(questions);



document.querySelector(".btn_start").addEventListener("click", function () {
    if (quiz.questions.length != quiz.questionIndex) {
        document.querySelector(".quiz_box").classList.add("active");
        showQuestion(quiz.getQuestion());
        quiz.questionIndex += 1;
    }else {
        console.log("quiz tamamlandı.");
    }
})

document.querySelector(".next_btn").addEventListener("click",function(){
    if (quiz.questions.length != quiz.questionIndex) {
        document.querySelector(".quiz_box").classList.add("active");
        showQuestion(quiz.getQuestion());
        quiz.questionIndex += 1;
    } else {
        console.log("quiz tamamlandı.");
    }
});

function showQuestion(soru) {
    let question = `<span>${soru.questionText}</span>`;
    let option = '';

    for (let answer in soru.answerOptions) {
      option += 
      `
       <div class="option">
          <span><b>${answer}</b> ${soru.answerOptions[answer]}</span>
       </div>
      `;
   }

   document.querySelector(".question_text").innerHTML = question;
   document.querySelector(".option_list").innerHTML = option;

}


