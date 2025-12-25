function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}


function searchApi(value) {
  console.log("API call for:", value);
}

const debouncedSearch = debounce(searchApi, 500);



debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("rea");
debouncedSearch("react");