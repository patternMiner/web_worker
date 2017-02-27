/**
 * Created by jbisa on 2/27/17.
 */
var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');

var greeting = document.querySelector('#greeting');

if (window.Worker) {
  var myWorker = new Worker("worker.js");

  firstName.onchange = function() {
    myWorker.postMessage([firstName.value,lastName.value]);
    console.log('Message posted to worker');
  };

  lastName.onchange = function() {
    myWorker.postMessage([firstName.value,lastName.value]);
    console.log('Message posted to worker');
  };

  myWorker.onmessage = function(event) {
    greeting.textContent = event.data;
    console.log('Message received from worker');
  };
}
