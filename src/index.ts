import { Post } from "./post";

const helloWorld = () => {
  console.log("Hello World");
};

const post = new Post({
  baseUrl: "https://jsonplaceholder.typicode.com",
  apiKey: "",
});

post.getPosts().then((posts) => {
  console.log(posts);
});

// Path: src/index.test.js
export default {
  helloWorld,
};
