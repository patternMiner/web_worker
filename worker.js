/**
 * Created by jbisa on 2/27/17.
 */
onmessage = function(event) {
  console.log('Message received from main script');
  var workerResult = 'Hello ' + event.data[0] + ' ' + event.data[1] + '!';
  console.log('Posting message back to main script');
  postMessage(workerResult);
}
