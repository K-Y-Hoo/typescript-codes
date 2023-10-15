// Partial
interface Address {
  email: string;
  address: string;
}

const me: Partial<Address> = {};
const you: Partial<Address> = {email:'abcd.google.com'};
const all: Address = {email:'abcd.google.com', address: 'Kim'};

// Pick
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean Room",
  completed: false
}

// Omit
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview2 = Omit<Todo2, "description">;

const todo2: TodoPreview2 = {
  title: "Clean room",
  completed: false,
  createdAt: 1111
}

// Required
type User = {
  firstName: string,
  lastName?: string
}

let firstUser: User = {
  firstName: "Kim"
}

/*let SecondUser: Required<User> = {
  firstName: "Lee"
}*/

// Record
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: {age: 10, breed: 'persian'},
  boris: {age: 5, breed: 'maine coon'},
  mordred: {age: 12, breed: "british short hair"}
}

// ReturnType
type T0 = ReturnType<() => string>
type T1 = ReturnType<(s: string) => void>

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = 'Hello';
//const b: ReturnType<typeof fn> = true;