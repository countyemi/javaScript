// 1. Power Function
function deepEqual(objA, objB) {
  // check if both are same
if (objA === objB){
  return true;
}
// check for null
if (objA === null || objB === null || typeof objA != "object" || typeof objB != "object") { return false}
const keysA = Object.keys(objA);
const keysB = Object.keys(objB);
// check key length
if (keysA.length !== keysB.length) {return false;}
// check for values
  for (const key of keysA) {
    if (
      !Object.hasOwn(objB, key) ||
      !deepEqual(objA[key], objB[key])
    ) {
      return false;
    }
  }

  return true;
}

// ------------------------------------------
// 2. Memoized Fibonacci
 function diffObjects(oldObj, newObj) {
 // initiate variables
  const added = {};
  const removed = {};
  const changed = {};

  // Check for added and changed keys
  for (const key of Object.keys(newObj)) {

    // Key exists in new but not in old
    if (!Object.hasOwn(oldObj, key)) {
      added[key] = newObj[key];
    }

    // Key exists with different values
    else if (oldObj[key] !== newObj[key]) {
      changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  // Check for removed keys
  for (const key of Object.keys(oldObj)) {

    if (!Object.hasOwn(newObj, key)) {
      removed[key] = oldObj[key];
    }
  }

  return {
    added,
    removed,
    changed
  };
}
//------------------------------------------------
// 3. Curry
function deepFreeze(obj) {

  // Check for null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Loop through object keys
  for (const key of Object.keys(obj)) {

    
    deepFreeze(obj[key]);
  }

  
  return Object.freeze(obj);
}
// ----------------------------------------------
// 4. Once
function createCounter() {

  // declare private variable 
  let count = 0;

  return {
    // Increase count
    increment() {
      count++;
    },

    // Decrease count
    decrement() {
      count--;
    },

    // Getter to access count
    get value() {
      return count;
    }
  };
}
// ------------------------------------------
// 5. Event Emitter
function validateSchema(obj, schema) {

  // define variable for error
  const errors = [];

  // Loop through  keys in the schema
  for (const key of Object.keys(schema)) {

    // Check for missing property
    if (!Object.hasOwn(obj, key)) {
      errors.push(`${key}: missing property`);
    }

    // Check for datatype
    else if (typeof obj[key] !== schema[key]) {
      errors.push(
        `${key}: expected ${schema[key]}, got ${typeof obj[key]}`
      );
    }
  }

  return errors;
}



