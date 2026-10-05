// Numeric Enum

enum Role{
    Admin,
    User,
    Guest
}
let role: Role = Role.Admin;
console.log(role); // Output: 0

enum Status{
    Success = "Passed",
    Failure = "Failed",
}
let stat: Status = Status.Success;
console.log(stat); // Output: Passed

enum RoleEnum{
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

function getRole(role:RoleEnum){
    console.log("role", role);
    if(role === RoleEnum.Admin){
        console.log("Admin role");
    } else if(role === RoleEnum.User){
        console.log("User role");
    }else if(role === RoleEnum.Guest){
        console.log("Guest role");
    }
}
getRole(RoleEnum.Admin); // Output: Admin role
getRole(RoleEnum.User); // Output: User role