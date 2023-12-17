// digunakan untuk mencegah terjadi load pada API
export const posts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};
export const postById = ({ params }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
};
