import { ChangeEvent } from "react";

import "./Input.css";

interface Props {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const Input = (
    {
        name,
        value,
        onChange
    }: Props
) => {



    return (
        // input de select redius
        <input
            type="text"
            className="input"
            name={name}
            placeholder={name}
            onChange={onChange}
            value={value}
        />
    )

}