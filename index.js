function findMatching(drivers, str) {
  return drivers.filter((value) =>
    value.toLowerCase().includes(str.toLowerCase())
  );
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(
    (value) => value.toLowerCase().indexOf(str.toLowerCase()) === 0
  );
}

function matchName(driver, str) {
  return driver.filter((value) => value.name === str);
}

