import { MouseEventHandler } from "react";

// Custom Button Props Interface corresponds to the props of the Custom Button Component
export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}