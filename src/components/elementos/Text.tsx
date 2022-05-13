import "./Text.css";

interface Props {
    text: string;
    size?: string;
}

export const Text =  (
    {
        text,
        size = "normal"
    }: Props
) => {
    return (
        <p className={`text text__${size}`}>
            {text}
        </p>
    )
}