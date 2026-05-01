export const Button = (props) => {
    const {classes = '', label} = props;
    return (
        <button className={`${classes} primary-btn`}>{label}</button>
    );
};