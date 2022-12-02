const adviceId = document.getElementById('advice-id'),
      adviceText = document.getElementById('advice-text'),
      dice = document.getElementById('dice');

function getAdvice () {
  let id = Math.ceil(Math.random() * 200)
  fetch(`https://api.adviceslip.com/advice/${id}`).then(promise => promise.json())
  .then(advice => {
    adviceId.textContent = id;
    adviceText.textContent = advice.slip.advice;
  }).catch(error => console.log(error))
}
getAdvice();
dice.onclick = () => {
  getAdvice();
}