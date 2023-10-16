"use strict";
//type UserKeys = keyof IUser
// "name" | "age" | "address"
const user = {
    name: "Kim",
    age: 25,
    address: "seoul"
};
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["manager"] = 1] = "manager";
})(UserRole || (UserRole = {}));
