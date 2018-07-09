var recipes = {};

var updateObjectWithKeyAndValue = function(object,key,value){
  var newObject = object;
  newObject[key] = value;
  return newObject;
}

var destructivelyUpdateObjectWithKeyAndValue = function(object,key,value){
  
  object[key] = value;
  return object;
}
var deleteFromObjectByKey = function(object,key){
  
  var newObject = Object.assign({, object1);
  delete newObject[key];
  return newObject;
}
