
    let display = document.querySelector('.display');

    // Get all buttons with the class 'button'
    let buttons = document.querySelectorAll('.button');
    let buttonsArray = Array.from(buttons)
    let string ='';
    // Add event listeners to all buttons
    buttonsArray.forEach(button => {
       
        button.addEventListener('click', event => {
            console.log(event.target.value)
            if(event.target.value == 'DEL'){
                string = string.substring(0, string.length-1)
                display.value = string;
            }else if (event.target.value == 'AC'){
                string ='';
                display.value = string;
            }else if (event.target.value == '='){
                string = eval(string);
                display.value = string;
            }
            else {
                string+=event.target.value;
                display.value = string;
            }
            
        });
    });