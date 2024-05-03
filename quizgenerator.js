const quiz = new Quiz(questions);
const ui = new UI();


ui.btn_start.addEventListener("click", function() {
    
     ui.quiz_box.classList.add("active");
     ui.showQuestion(quiz.getQuestion());
     ui.showTheNumberOfQuestions(quiz.questionIndex + 1,quiz.questions.length);
     ui.btn_next.classList.remove("show");
})

ui.btn_next.addEventListener("click",function() {
    if (quiz.questions.length != quiz.questionIndex + 1) 
    {
        quiz.questionIndex += 1;
        ui.showQuestion(quiz.getQuestion());
        ui.showTheNumberOfQuestions(quiz.questionIndex + 1,quiz.questions.length);
        ui.btn_next.classList.remove("show");
        
    } else {
        console.log("quiz tamamlandı.");
    }
});

   function optionSelected(option) {
        let answer = option.querySelector("span b").textContent;
        let question = quiz.getQuestion();
    

    if(question.checkAnswer(answer)) 
    {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }
  
    for(let i=0; i< ui.option_list.children.length; i++)
    {
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");

}



