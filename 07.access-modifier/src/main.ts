//public, private, protected

class Post {
  constructor(private id: number = 0, protected title: string = "") {
  }
  getPost() {
    return `postId ${this.id}, postTitle: ${this.title}`;
  }
}

class PostB extends Post {
  getPost() {
    return this.title;
    //return this.id;
  }
}

const post: Post = new Post(1, "title 1");
