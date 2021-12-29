class Car {                                                             // creates the Car class
    constructor(brand) {                                                // the constructor is used for initialising of the instance (object) when called, the argument is brand
      this.carname = brand;                                             // the constructor runs with the given argument and assign it to this.carname
    }
    present() {
      return 'I have a ' + this.carname;                                // function that is part of the class, returns a string with carname of the instance.
    }
  }
  
  class Model extends Car {                                             // Model class inherits form the Car class
    constructor(brand, mod) {                                       
      super(brand);                                                     // assigns brand to this.carname, which is inherit form the super class Car
      this.model = mod;                                                 // assigns mod to this.model
    }
    show() {
      return this.present() + ', it was made in ' + this.model;         // function of the Model Class, when invoved it invoces the present() function, 
    }                                                                   // that it inherits from the super Class Car
  }
  
  let makes = ["Ford", "Holden", "Toyota"]                              // array with 3 strings
  let models = Array.from(new Array(40), (x,i) => i + 1980)             //  



  
  function randomIntFromInterval(min,max) {                             // this function when invoked generates and returns a random number between the min and max arguments, 
      return Math.floor(Math.random()*(max-min+1)+min);                 // min and max included                   
  }
  
  for (model of models) {                                               // for...of loop that addresses each element(model) of the models array
  
    make = makes[randomIntFromInterval(0,makes.length-1)]               // invokes the randmIntFromInterval function with the min value (0) and max value = makes.length -1 (2)
                                                                        // this function returns a number between 0 and 2 and is the index number for the makes array.
    model = models[randomIntFromInterval(0,makes.length-1)]             // invokes the randmIntFromInterval function with the min value (0) and max value = makes.length -1 (2)
                                                                        // this function returns a number between 0 and 2 and is the index number for the makes array.
    mycar = new Model(make, model);                                     // creates a new instance of the Model class with make and model as parameters
    console.log(mycar.show())                                           // invokes the show() function of the mycar instace of the Model class
  }