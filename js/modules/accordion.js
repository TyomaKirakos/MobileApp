const accordion = () => {
    const questionsBlock = document.querySelector('.often-questions-block');

    questionsBlock.addEventListener('click', (e) => {
        if (e.target.closest('.questions-block__question-block')){
            let questionBlock = e.target.closest('.questions-block__question-block');
            let questionBtn = questionBlock.querySelector('.question__btn');
            let answer = questionBlock.querySelector('.question-block__question-answer');
            questionBtn.classList.toggle('question__btn_active')
            answer.classList.toggle('question-block__question-answer_showed');
        }
    })
}

export default accordion;