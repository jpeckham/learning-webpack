import _ from 'lodash';
import './style.css'
import Icon from './icon.png';
import Data from './data.xml';


function component() {
    const element = document.createElement('div');
    const { x, y } = { x: 1, y: 2 };

    element.innerHTML = _.join(['Hello', 'webpack', x, y], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    console.log(Data);
    return element;
}

document.body.appendChild(component());

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