let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener ('scroll' , () => {

var scrollPrecentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

var drawLength = pathLength * scrollPrecentage;

path.style.strokeDashoffset = pathLength - drawLength;

})
