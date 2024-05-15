// Напишіть regex, котрий знайде cat та can, але не знайде car
var text = 'cat car can';
var regex = /ca[t|n]/g;
var matches = text.match(regex);
console.log(matches);

// Напишіть regex, котрий знайде ВСІ слова котрі починаются на h
var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var regex = /\bh\w*/gi;
var matches = text.match(regex);
console.log(matches);  

// Напишіть regex, котрий знайде ВСІ слова більше ніж 5 символів
var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var regex = /\b\w{6,}\b/g;
var matches = text.match(regex);
console.log(matches); 

