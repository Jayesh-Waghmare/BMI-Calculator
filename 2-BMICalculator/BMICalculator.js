// select the form
const form = document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

// listen when we submit the form
form.addEventListener('submit', function(e) {
    e.preventDefault() // prevent the form from getting submitted as this is the bydefault action of form

    // we will extract the values when we submit the form
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height<0 || isNaN(height)){
        // to add values in it we use innerHTML
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        // to add values in it we use innerHTML
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        // toFixed tells a number with how many decimals
        const bmi = (weight / ((height*height)/10000)).toFixed(2); // formula for calculating the result
          // show the result - put the value of bmi into result
        if(bmi < 18.6) results.innerHTML = `${bmi} - Underweight`;
        else if(bmi < 24.9) results.innerHTML = `${bmi} - Normal Range`;
        else results.innerHTML = `${bmi} - Overweight`;
    }
});