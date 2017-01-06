var ProgressSquare = function(container) {
  this.container = container;
}

ProgressSquare.prototype.setPercentage = function(num) {
  try{
    if (isNaN(parseInt(num)))
      throw new Error("Please enter a valid number")
    else if (num >100 || num < 0) {
      throw new Error("Sorry, but percentage must be between 0 and 100")
    } else {
      var container = document.querySelector(this.container);
      container.querySelector('.progress-square__percentage').innerHTML = num+'%';
      container.querySelector('.progress-square__line').style.width = num+'%';
    }
  }
  catch(e){
    console.error(e.name+" "+e.message)
  }
}
ProgressSquare.prototype.reset = function() {
    this.setPercentage(0);
}

// for example
// create new progress-square object (must be uniq )
var addProgress = new ProgressSquare('#add-progress');

// create new progress-square object (set width of completed 0-100% )
addProgress.setPercentage(20);
