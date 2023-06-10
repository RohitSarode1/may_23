function likeme(p1) {
   // let likeRef1 = document.querySelector("#id1");

   let likeRef1 = p1.nextElementSibling;

    let existingValue = likeRef1.innerHTML;
    let newValue = parseInt(existingValue) + 1;

    likeRef1.innerHTML = newValue;
 }
 
 function dislikeme(p1) {
     //let likeRef1 = document.querySelector("#id2");

     let likeRef1 = p1.nextElementSibling;

     let existingValue = likeRef1.innerHTML;
     let newValue = parseInt(existingValue) + 1;

     likeRef1.innerHTML = newValue;
  }