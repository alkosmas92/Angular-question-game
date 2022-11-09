import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../common/services/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  //
  constructor(private questionService: QuestionsService) {}

  countQuestion: number = this.questionService.questions.length - 1;
  question: string;
  indexOfQuestions: number;
  answers = [];
  correctAnswer: string;
  theme = new Array(this.countQuestion);
  //initialize the modal
  isModalOpen = false;
  //this Flag check when you have chosen wrong answer
  flagFalse: number;
  // this variable count the correct answers
  countCorrect: number;

  //A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  // Define an ngOnInit() method to handle any additional initialization tasks.
  ngOnInit(): void {
    this.indexOfQuestions = 0;
    this.question =
      this.questionService.questions[this.indexOfQuestions].question;
    this.answers =
      this.questionService.questions[this.indexOfQuestions].answer5;
    this.correctAnswer =
      this.questionService.questions[this.indexOfQuestions].correctAnswer;
    this.theme.fill('orange');
    this.flagFalse = 0;
  }
  //The actions when you have chosen the correct answer -->you go to the next question
  selectNext() {
    this.indexOfQuestions++;
    this.question =
      this.questionService.questions[this.indexOfQuestions].question;
    this.answers =
      this.questionService.questions[this.indexOfQuestions].answer5;
    this.correctAnswer =
      this.questionService.questions[this.indexOfQuestions].correctAnswer;
    this.flagFalse = 0;
  }

  // I control my modal
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    // I restart the game when I finished my questions
    if (this.indexOfQuestions === this.countQuestion) {
      this.indexOfQuestions = 0;
      this.question =
        this.questionService.questions[this.indexOfQuestions].question;
      this.answers =
        this.questionService.questions[this.indexOfQuestions].answer5;
      this.correctAnswer =
        this.questionService.questions[this.indexOfQuestions].correctAnswer;
      this.flagFalse = 0;
    }
  }
  //the actions when I have chosen the answer
  setMove() {
    // I initialize the count of correct answers
    if (this.indexOfQuestions === 0) {
      this.countCorrect = 0;
    }
    //When I have additional questions so:
    if (this.indexOfQuestions < this.countQuestion) {
      //i will raise my count of correct answer when you have chosen the correct answer and:
      if (!this.flagFalse) {
        this.countCorrect++;
      }
      //I will go to next question
      this.selectNext();
    }
    //else if you do not have additional question
    else if (this.indexOfQuestions === this.countQuestion) {
      //raise my count of correct answer when you have chosen the correct answer and:
      if (!this.flagFalse) {
        this.countCorrect++;
      }
      //I open the modal
      this.setOpen(true);
    }
  }
  //I use when I click an answer
  selectAnswer(answer, index) {
    //I refresh my theme with orange color
    this.theme.fill('orange');
    //When I have chosen the correct answer:
    if (answer === this.correctAnswer) {
      //1)I will change the color of this button to green
      this.theme[index] = 'green';
      //2)after one sec, I will go to the next question
      setTimeout(() => {
        this.setMove();
        this.theme[index] = 'orange';
      }, 1000);
    }
    //Else if I have chosen the wrong answer:
    if (answer !== this.correctAnswer) {
      //1) I will activate the flag
      this.flagFalse = 1;
      //2) I will change the color of this button to red
      this.theme[index] = 'red';
    }
  }
}
