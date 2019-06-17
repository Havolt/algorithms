
// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) 
// setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it
//  has to be a string.

// These methods must be the only available means of interacting with the object.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
// Write your own code.


var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  
    let fullName = firstAndLast;
  
    this.getFirstName = () => {
      return fullName.split(" ")[0];
    }
    this.getLastName = () => {
      return fullName.split(" ")[fullName.split(" ").length-1];
    }
    this.getFullName = () => {
      return fullName;
    };
  
    this.setFirstName = (name) => {
        fullName = fullName.split(' ');
      fullName.splice(0, 1, name);
      fullName = fullName.join(' ');
    }
    
    this.setLastName = (name) => {
        fullName = fullName.split(' ');
      fullName.splice(fullName.length-1, 1 , name);
      fullName = fullName.join(' ');
    }
    
    this.setFullName = (name) => {
        fullName = name;
    }
  
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFirstName();
  bob.getFullName()
  
  