import { Text } from "./Text";
import "./Button.css";
interface Props {
    text: string;
    action?: () => void;
    active?: boolean;
}

export const Button = ({ text, action, active }: Props) => {
    return (
        <button
        className={`button button--${text.toLowerCase()}`}
        onClick={() => {
            if (action !== undefined) {
            action();
            }
        }}
        disabled={active}
        >
        <Text
            text={text === "Complete" ? "✔" : text}
        />
        </button>
    );
};
