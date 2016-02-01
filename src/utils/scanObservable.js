/* eslint no-param-reassign:[0] */

export default function scanObservable(fn, acc, observable) {
  return observable.map(item => acc = fn(acc, item))
}
