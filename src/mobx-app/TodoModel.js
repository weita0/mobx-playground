import {observable, computed} from 'mobx'

export default class TodoModel {
  id
  @observable title
  @observable finished 
  
  constructor (id, title, finished) {
    this.id = id
    this.title = title
    this.finished = finished
  }

  toggle () {
    this.finished = !this.finished
  }
  
}