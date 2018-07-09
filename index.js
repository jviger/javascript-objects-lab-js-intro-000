var recipes = {};

var updateObjectWithKeyAndValue = function(o,k,v){
  
  o.k = v;
  
}

var destructivelyUpdateObjectWithKeyAndValue = function(o,k,v){
  
  o.k = v;
  return o;
}

