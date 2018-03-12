module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return 1;
  }

  var res = 0;
  var tmp = 1;

  array.sort(function(x,y){ return x-y;});

  for(i=1;i<array.length;i++){
    if(array[i]-array[i-1]===1){
      tmp++;
    }
    if(array[i]-array[i-1]>1){
      if (tmp>res) {
        res = tmp;
    } else {
        tmp = 1;
      }
    }
    if(array[i]-array[i-1]===0){
      continue;
    }
  }
  return res;
}
