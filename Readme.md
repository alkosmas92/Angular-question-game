## Question game with Ionic framework 6 with Angular

### TEST: Stack: Ionic framework 6 with Angular

_Create a quiz engine that will read 5 questions from a static json. Each question will have 4 answers._
_The user will enter the UI and will see the first question with the answers. If the user clicks on the correct answer,_
_the color of the answer will turn green and will take you to the next question, if not the color of the answer will become red and will wait till you click the correct answer._
_At the end of the five questions the user will see an overview of how many correct questions he has scored._ 

### Answer

```Models```

Inside the ```src/app/common/models/questions```, I create the Question interface which help me to read 
my data, base on my model.

```Servises```


Inside the ```src/app/common/servises/questions.servises.ts```, I develop my class QuestionsService which read my data from static json. 


```Components```

My basic component is QuestionComponents to ```src/app/question/question.component.ts```.
I create my class QuestionComponent which have all the main functions. First of all initialize my constructor with my data.
Secondly inside the ngOnInit function initialize my variables. In additional, i use many functions:

I control my modal with:
```setOpen(isOpen: boolean)``` 

When i have chosen the correct answer -->i go to the next question with:
```selectNext()```

When I have chosen the answer:
```setMove()``` 

When I click an answer
```selectAnswer(answer, index)```


You can 
### run
with:
```
git clone https://github.com/alkosmas92/Angular-question-game
cd Angular-question-game
npm i
ionic serve 
```
### Test:
``` ng test ```

### Note: 
When you finished your questions, the game open a modal, in continue you will start the game again.   
