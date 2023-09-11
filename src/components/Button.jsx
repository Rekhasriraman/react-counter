import './Button.css';

const Button = ({ text, styling, clickHandler }) => {
    return (
        <button className={`btn ${styling}`} onClick={clickHandler}>
            {text}
        </button>
    );
};

export default Button;