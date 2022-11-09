**Question game with Ionic framework 6 with Angular**


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


You can run with:
```
git clone https://github.com/alkosmas92/Angular-question-game
cd Angular-question-game
npm i
ionic serve 
```
