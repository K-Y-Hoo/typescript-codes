"use strict";
//public, private, protected
class Post {
    constructor(id = 0, title = "") {
        this.id = id;
        this.title = title;
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
const post = new Post(1, "title 1");
