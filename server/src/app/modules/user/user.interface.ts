export type TUser = {
    industyName : string,
    email : string,
    contactNo : string,
    address : string,
    ownerName : string,
    password : string,
    isDelete : boolean,
    profileImage ?: string,
    role : "user" | "doctor" | "admin"
}