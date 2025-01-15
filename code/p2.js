const form = document.querySelector('form');
const res = document.querySelector('#results');
const msg = document.querySelector('#msg')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const h = parseInt(document.querySelector("#height").value);
  const w = parseInt(document.querySelector("#weight").value);

  if (isNaN(h) || h <= 0) {
    res.innerHTML = "Please enter a valid height.";
  } else if (isNaN(w) || w <= 0) {
    res.innerHTML = "Please enter a valid weight.";
  } else {
    
    const bmi = (w / ((h * h) / 10000)).toFixed(2); 
    res.innerHTML = `Your BMI is: ${bmi}`;
    if(bmi < 18.6){
      msg.innerHTML = "You are underweight"
      msg.style.color = "blue"
    }
    else if(bmi >=18.6 && bmi <= 24.9){
      msg.innerHTML = "you are Normal"
      msg.style.color = "green"
    }
    else{
      msg.innerHTML = "you are overweight"
      msg.style.color = "red"
    }

  }
});
