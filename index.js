let getSentence = document.getElementById("text");
let userRedactWords = document.getElementById("word");
let getSymbol = document.getElementById('tag');
let output = document.querySelector('.output');
let sentence, userSymbol, userSentence;


/* The app statistics */
let wordsCount = document.getElementById('count');
let scrambledWords = document.querySelector('#scrambledcount');
let scrambledChar = document.getElementById('scrambledChar');
let time = document.getElementById('time');

/* To get the button for later use */
let redact = document.querySelector('.check');


redact.addEventListener('click', () => {
  let start = Date.now();

  /*Spliting of the text into an array after converting to lowercase*/
  sentence = (getSentence.value).toLowerCase().split(' ');
  userSentence = (userRedactWords.value).toLowerCase().split(' ');
  userSymbol = getSymbol.value; // To get the user symbol

  /* If the user did not enter any symbol */
  if (!userSymbol) userSymbol = '*';

  /*--Second Test - Working better than the other brother. Lol--*/
  let scrambledWordCount = 0;
  let scrambledCharacters = 0;
  for (let word in sentence) {
    for (let userWord of userSentence) {
      if (sentence[word] === userWord) {
        sentence[word] = userSymbol.repeat(userWord.length);
        scrambledWordCount++;
        scrambledCharacters += userWord.length;
      }
    }
  }
  output.innerHTML = sentence.join(' ');

  wordsCount.innerHTML = `Number of words scanned: ${sentence.length}`;
  scrambledWords.innerHTML = `Number of scrambled words: ${scrambledWordCount} word${scrambledWordCount > 1 ? 's' : ''}`;
  scrambledChar.innerHTML = `Number of scrambled characters: ${scrambledCharacters} character${scrambledCharacters > 1 ? 's' : ''}`;

  /*how long it took (in seconds) to complete the scrambling*/
  let mili = Date.now() - start;
  let end = mili / 1000;
  time.innerHTML = `It took ${end} second${end > 1 ? 's' : ''} or ${mili} millisecond${mili > 1 ? 's' : ''} to complete the scrambling`;

})































/*--First Test but a little bug--*/
  // sentence = getSentence.value;
  // userSentence.forEach((word) => {
  //   let regex = new RegExp(word, 'gi');
  //   sentence = sentence.replace(regex, userSymbol.repeat(word.length));
  // })
  // output.innerHTML = sentence;
