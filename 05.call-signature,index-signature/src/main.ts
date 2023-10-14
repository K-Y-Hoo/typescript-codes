//콜 시그니처
interface getLikeNumber {
  (like: number): number;
}

interface Post {
  id: number;
  title: string;
  getLikeNumber: getLikeNumber;
  //getLikeNumber: (like: number) => number;
}
const post1: Post = {
  id: 1,
  title: 'post 1',
  getLikeNumber(like: number) {
    return like;
  }
}
post1.getLikeNumber(1);



//객체 인덱스 시그니처
interface Post2 {
  [key: string]: unknown;
  id: number;
  title: string;
}

const post2: Post2 = {
  id: 1,
  title: 'post 2',
}

post2['description'] = 'description 1';
post2['pages'] = 400;


//배열 인덱스 시그니처
interface Names {
  [item: number]: string;
}
const userNames = ['Kim', 'Park', 'Lee'];
//userNames[0] === 'Kim'