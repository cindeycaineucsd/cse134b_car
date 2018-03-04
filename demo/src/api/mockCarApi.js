import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const cars = [
  {
    id: "react-creating-reusable-components",
    title: "Creating Reusable React Components",
    watchHref: "http://pluralsight.com/cars/react-creating-reusable-components",
    authorId: "cory-house",
    length: "6:20",
    category: "JavaScript"
  },
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/cars/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/cars/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/cars/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/cars/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/cars/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (car) => {
  return replaceAll(car.title, ' ', '-');
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
        if (car.title.length < minCarTitleLength) {
          reject(`Title must be at least ${minCarTitleLength} characters.`);
        }

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

  static deleteCar(carId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCarToDelete = cars.findIndex(car => {
          return car.carId == carId;
        });
        cars.splice(indexOfCarToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CarApi;
