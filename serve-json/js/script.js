document.addEventListener("DOMContentLoaded", e => {

    async function getData() {
      try {
        const response = await fetch('https://res.cloudinary.com/pictures77/raw/upload/v1571071729/data.json');
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("Oops, we haven't got JSON!");
        }
        const json = await response.json();
        console.log(json)
        /* process your JSON further */
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  
  })