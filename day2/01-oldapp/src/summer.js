function Summer() {
  // ctor function
  this.sum = 0;
}

Summer.prototype.add = function(n) {
  this.sum += n;
};

Summer.prototype.printTotal = function() {
  console.log(this.sum);
};



const s1 = new Summer();
const s2 = new Summer();

s1.add(10);
s1.add(20);
s2.add(25);
s1.add(15);

s1.printTotal();
s2.printTotal();


