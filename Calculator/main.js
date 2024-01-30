let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText === '=') {

            if (string.includes('%')) {
                string = string.replace('%', '/100*');
            }

            try {
                string = String(eval(string));
                inputBox.value = string;
            } catch (error) {
                inputBox.value = 'Error';
                string = '';
            }
        } else if (b.target.innerText === 'C') {
            string = '';
            inputBox.value = string;
        } else if (b.target.innerText === 'backspace') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        } else if (b.target.innerText === '%') {
            string += '%';
            inputBox.value = string;
        } else {
            let buttonText = b.target.innerText;
            if (buttonText === '÷') {
                buttonText = '/';
            } else if (buttonText === 'x') {
                buttonText = '*';
            }

            string += buttonText;
            inputBox.value = string;
        }
    });
});
