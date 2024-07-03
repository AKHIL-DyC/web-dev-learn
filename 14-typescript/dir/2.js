"use strict";
function islegal(user) {
    if (user.age < 18) {
        return false;
    }
    else {
        return true;
    }
}
function greets(user) {
    if (islegal(user)) {
        console.log("hello" + user.firstname);
    }
    else {
        console.log("not legal");
    }
}
greets({
    firstname: "akhil",
    lastname: "i a",
    age: 19
});
