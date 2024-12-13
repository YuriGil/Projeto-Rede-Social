export interface IFormData {
    email: string;
    password: string;
    img:any;
}
export interface IFormLogin {
    email: string;
    password: string;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}