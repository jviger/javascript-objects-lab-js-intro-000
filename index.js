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

