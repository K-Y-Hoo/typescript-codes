interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}
const bear: Bear = {
  name: 'honey bear',
  honey: true
}

type Animal1 = {
  name: string;
}
type Bear1 = {
  honey: boolean;
}
const bear1: Bear = {
  name: 'honey bear',
  honey: true
}

interface Animal2 {  // interface는 병합 가능
  name: string;
}
interface Animal2 {
  honey: boolean;
}
const bear2: Animal2 = {
  name: 'honey bear',
  honey: true
}

/*type Animal3 { // type은 병합 불가능
  name: string;
}
type Animal3 {
  honey: boolean;
}*/



