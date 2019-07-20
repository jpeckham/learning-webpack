import _ from 'lodash';
import './style.css'
import Icon from './icon.png';
import Data from './data.xml';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const { x, y } = { x: 1, y: 2 };
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack', x, y], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);


    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    console.log(Data);
    return element;
}
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);


if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('promise complete');
    }, 300);
});

promise1.then(function (value) {
    console.log(value);
    // expected output: "foo"
});
//ecma2018 test
promise1.finally(
    function () {
        console.log('finally');
    }
);

console.log(promise1);
  // expected output: [object Promise]