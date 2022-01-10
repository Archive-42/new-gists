export function fetchData() {
  let aboutPromise = fetchAbout();
  let addressPromise = fetchAddress();
 
  return {
    about: wrapPromise(aboutPromise),
    address: wrapPromise(addressPromise)
  };
}
 
function fetchAbout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the about page with company details");
    }, 6000);
  });
}
 
function fetchAddress() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("337, Neverland, US");
    }, 6000);
  });
}
 
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
