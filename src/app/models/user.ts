export interface User {
    name:string;
    email:string;
    mobile:string;
    gender:string;
    user_type:string;
    address:string;
    company_details?:Object;
    business_details?:Object;
    optradio?:Boolean;
}