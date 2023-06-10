function likeme(p1) {
    let likeRef = p1.nextElementSibling;

    let existingValue = likeRef.innerHTML;
    let newValue = parseInt(existingValue) + 1;
  
    likeRef.innerHTML = newValue;
}

function dislikeme(p1) {
    let likeRef = p1.nextElementSibling;

    let existingValue = likeRef.innerHTML;
    let newValue = parseInt(existingValue) + 1;
  
    likeRef.innerHTML = newValue;
}

function angrywithme(p1) {
    let likeRef = p1.nextElementSibling;

    let existingValue = likeRef.innerHTML;
    let newValue = parseInt(existingValue) + 1;
  
    likeRef.innerHTML = newValue;
}

function deletemessage(P1) {
    console.log(P1);
    P1.parentElement.parentElement.remove();
}