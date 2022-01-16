let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/all-of-the-football.png') {
      myImage.setAttribute('src','images/less-of-the-football.jpg');
    } else {
      myImage.setAttribute('src','images/all-of-the-football.png');
    }
}

/*document.querySelector('button').onclick = function(){
    alert('shitty fuck fuck');
}
*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'fuck how do i turn this off, ' + myName;
  } 

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'fuck how do i turn this off, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  
  