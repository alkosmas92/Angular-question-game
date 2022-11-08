import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../common/services/questions.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],

})
export class QuestionComponent implements OnInit {

  constructor(private  questionService: QuestionsService) { }
  countOfquestion = this.questionService.questions.length -1
  question :string ;
  selectedNext : number;
  answers = [];
  correctAnswer:string ;
  theme=new Array(this.countOfquestion);
  isModalOpen = false;
  flagFalse:number;
  countCorrect:number;


  ngOnInit(): void {
    this.selectedNext=0;
    this.question = this.questionService.questions[this.selectedNext].question;
    this.answers = this.questionService.questions[this.selectedNext].answer5;
    this.correctAnswer = this.questionService.questions[this.selectedNext].correctAnswer;
    this.theme.fill( 'orange');
    this.flagFalse=0;
    this.countCorrect=0;
  }


  selectNext(){
    this.selectedNext++
    this.question = this.questionService.questions[this.selectedNext].question;
    this.answers = this.questionService.questions[this.selectedNext].answer5;
    this.correctAnswer = this.questionService.questions[this.selectedNext].correctAnswer;
    this.flagFalse=0;
  }

  setOpen(isOpen: boolean) {
    if(this.selectedNext === this.countOfquestion) {
      this.selectedNext = 0;
      this.question = this.questionService.questions[this.selectedNext].question;
      this.answers = this.questionService.questions[this.selectedNext].answer5;
      this.correctAnswer = this.questionService.questions[this.selectedNext].correctAnswer;
      this.flagFalse=0;
      this.countCorrect=0;
    }
    this.isModalOpen = isOpen;
  }

  setMove(){
    if(this.selectedNext < this.countOfquestion){
      if(!this.flagFalse)
        this.countCorrect++
      this.selectNext()
     }
    else if(this.selectedNext === this.countOfquestion){
      if(!this.flagFalse)
        this.countCorrect++
         this.setOpen(true);
    }
  }

  selectAnswer(answer,index){
    this.theme.fill( 'orange');
      if (answer === this.correctAnswer ) {
        this.theme[index] = 'green';
          setTimeout(() => {
            this.setMove()
            this.theme[index] = 'orange';
        }, 1000)
      }
      if (answer !== this.correctAnswer) {
        this.flagFalse=1;
        this.theme[index] = 'red';
      }
    }
}
