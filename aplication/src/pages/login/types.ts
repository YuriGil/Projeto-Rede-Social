export interface IFormData {
    email: string;
    password: string;
}
export interface IFormLogin {
    email: string;
    password: string;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}