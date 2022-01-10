export function getPosition() {
  return getData('/position.json').then((result) => result);
}

function getData(endpoint) {
  const delay = (0.5 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      fetch(endpoint).then((res) => {
        resolve(res.json());
      });
    }, delay);
  });
}
