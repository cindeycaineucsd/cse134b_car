import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const cars = [
  {
    id: 'car1', 
    watchHref: '', 
    make: 'Toyota', 
    model: 'Prius', 
    year: '2005', 
    mileage: '120,000', 
    transmission: 'Automatic', 
    color: 'Red', 
    titlestatus: 'Clean', 
    price: '$18,000'
  },
  {
    id: 'car2', 
    watchHref: '', 
    make: 'Honda', 
    model: 'Civic', 
    year: '2010', 
    mileage: '80,000', 
    transmission: 'Automatic', 
    color: 'Red', 
    titlestatus: 'Clean', 
    price: '$18,000'
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (car) => {
  return replaceAll(car.make + ' ' + car.model + ' ' + car.year + ' ' + Math.floor(Math.random() * 100000) , ' ', '-');
};

class CarApi {
  static getAllCars() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], cars));
      }, delay);
    });
  }

  static saveCar(car) {
    car = Object.assign({}, car); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCarTitleLength = 1;
        /*
        if (car.title.length < minCarTitleLength) {
          reject(`Title must be at least ${minCarTitleLength} characters.`);
        }
        */

        if (car.id) {
          const existingCarIndex = cars.findIndex(a => a.id == car.id);
          cars.splice(existingCarIndex, 1, car);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new cars in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          car.id = generateId(car);
          car.watchHref = `http://www.pluralsight.com/cars/${car.id}`;
          cars.push(car);
        }

        resolve(car);
      }, delay);
    });
  }

  static deleteCar(car) {
    var carId = car.id;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCarToDelete = cars.findIndex(car => {
          console.log(car.id + ' ' + carId);
          return car.id == carId;
        });
        console.log(indexOfCarToDelete);
        cars.splice(indexOfCarToDelete, 1);
        console.log(cars);
        resolve(cars);
        resolve(car);
      }, delay);
    });
  }
}

export default CarApi;
