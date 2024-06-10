// const body = document.getElementsByTagName("body")[0];

// const container = document.createElement('div');

// const box = document.createElement('div');

// const boxHead = document.createElement('div');

// const boxBody = document.createElement('div');

// const boxDown = document.createElement('div');

// container.className = "container";
// box.className = "box";
// boxHead.className = "box-head";
// boxBody.className = "box-body";
// boxDown.className = "box-down";


// const title = document.createElement('h2')
// title.innerText = "Rewiew your English writing for mistake";
// const p = document.createElement('h3');
// p.innerText = "Write clearly in English with no mistakes.Try out free writing app!"
// const bodyImage = document.createElement('img');
// bodyImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T0jxhA8AxS0JrTXEWlDFODT8yI-m3uXwYA&s'

// bodyImage.className = "body-image";

// const logo = document.createElement('img');
// logo.className = "logo";
// logo.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJegCk-tk9EwNlZ6Br_GnM9LJcfsjhtngkpA&s';

// const logoTitle = document.createElement('h4');
// logoTitle.innerText = "Grammarly";
// logoTitle.className = "logo-title";

// const xbuttonsvg = '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z"/><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/></svg>'

// boxHead.innerHTML = xbuttonsvg;



// boxHead.appendChild(logo);
// boxHead.appendChild(logoTitle);
// boxBody.appendChild(title);
// boxBody.appendChild(p);
// boxBody.appendChild(bodyImage);
// box.appendChild(boxHead);
// box.appendChild(boxBody);
// box.appendChild(boxDown);
// container.appendChild(box);
// body.appendChild(container);


// Calculator

const input = document.getElementsByTagName('input')[0];

    const log = (text) => {
        if(text === "+" || text === "-" || text === "*" || text === "/" || text === "%") {
            input.value += ` ${text} `
        } else if(text === "="){
            const arr = input.value.split(' ');
            const num1 = arr[0];
            const op = arr[1];
            const num2 = arr[2];
            if(op === "-"){
                input.value = num1 - num2
            } 
             else if (op === "*") {
                input.value = num1 * num2
            }
            else if (op === "/") {
                input.value = num1 / num2
            }
            else if (op === "+") {
                input.value = Number(num1) + Number(num2)
            }
            else if (op === "%") {
                input.value = Number(num1) / Number(num2) / 100 
            }
        } else if (text === "ac") {
            input.value = ''; // zai avahaar ajlaagui 
        } 
         else {
            input.value += text
        }

    };
     