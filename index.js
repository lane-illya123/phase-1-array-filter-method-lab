const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    const matchDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return matchDrivers;
  }

function fuzzyMatch(drivers, letters) {
    const matchDrivers = drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
    return matchDrivers;
  }

  function matchName(drivers, searchString) {
    let newDrivers = [
        { name: 'John', hometown: 'New York' },
        { name: 'Jane', hometown: 'Los Angeles' },
        { name: 'Bob', hometown: 'Chicago' },
        { name: 'John', hometown: 'Seattle' },
      ];
    
    return drivers.filter(newDrivers => newDrivers.name === searchString);
  }

  console.log(filterDrivers(drivers, 'John'));