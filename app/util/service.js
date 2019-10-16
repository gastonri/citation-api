// const getService = (url) => {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((myJson) => {
//       console.log(myJson);
//     });
// }

const getService = async (url) => {
  let response = await fetch(url);
  let cosas = await response.json();
  return cosas;
}

export default getService;
