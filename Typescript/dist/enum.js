"use strict";
// Numeric Enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let role = Role.Admin;
console.log(role); // Output: 0
var Status;
(function (Status) {
    Status["Success"] = "Passed";
    Status["Failure"] = "Failed";
})(Status || (Status = {}));
let stat = Status.Success;
console.log(stat); // Output: Passed
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["Admin"] = "ADMIN";
    RoleEnum["User"] = "USER";
    RoleEnum["Guest"] = "GUEST";
})(RoleEnum || (RoleEnum = {}));
function getRole(role) {
    console.log("role", role);
    if (role === RoleEnum.Admin) {
        console.log("Admin role");
    }
    else if (role === RoleEnum.User) {
        console.log("User role");
    }
    else if (role === RoleEnum.Guest) {
        console.log("Guest role");
    }
}
getRole(RoleEnum.Admin); // Output: Admin role
getRole(RoleEnum.User); // Output: User role
