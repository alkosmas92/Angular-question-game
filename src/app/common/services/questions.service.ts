import { Injectable } from '@angular/core';
import data from '../../../question.json';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  //I initialize my data to questions variable base on Question's model
  questions: Question[] = data.questions;
  constructor() {}
}
