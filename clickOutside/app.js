const elemento1 = document.querySelector('.container1');
const elemento2 = document.querySelector('.container2');

document.addEventListener('click',(e)=>{
    const outside = elemento1.contains(e.target) ;
    console.log(outside);
})