import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';

class TodosListCtrl {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}
