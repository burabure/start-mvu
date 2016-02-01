import Observable from 'zen-observable'

export default class Mailbox {
  constructor(initialValue) {
    this.observable = new Observable(observer => {
      observer.next(initialValue)
      this.observer = observer
    })
  }
}
