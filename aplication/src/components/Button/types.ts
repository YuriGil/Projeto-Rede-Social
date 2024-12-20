import { ReactNode } from "react";
export interface IButton {
    title: string;
     variant?: string; 
     onClick?: () => void;
     type?:string;
     disabled?: boolean;
    iconLeft?: ReactNode;
    style?: any;
}
export interface IButtonStyled {
    variant: string;
}