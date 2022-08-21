function addReview() {
    var review = document.getElementById(
     "reviewText").value;
   
    var addedReview = document
     .getElementById("addedReview");
    addedReview.innerHTML = review;
   }