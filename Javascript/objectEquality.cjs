function isEquivalent(a, b) {
           // arrays of property names
           var aPropNames = Object.getOwnPropertyNames(a);
           var bPropNames = Object.getOwnPropertyNames(b);
     
           // If their property lengths are different, they're different objects
           if (aPropNames.length != bPropNames.length) {
               return false;
           }
    
          for (var  i = 0; i < aPropNames.length; i++) {
              var propName = aPropNames[i];
    
              // If the values of the property are different, not equal
              if (a[propName] !== b[propName]) {
                  return false;
              }
          }
    
         // If everything matched, correct
         return  true;
      }
      console.log("are both obj equal :",isEquivalent({'hi':12},{'hi':12})); // returns true