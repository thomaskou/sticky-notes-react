import * as React from "react";
import PropTypes from "prop-types";
import "../styles/FieldButton.css";

const FieldButton = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
        props.handleClick();
    }

    return (
        <div>
            <form className={"FieldButtonContainer"} onSubmit={handleSubmit}>
            <input
                className={"NewNoteField"}
                value={props.value}
                onChange={props.handleChange}
                placeholder={"Add a new note."}
            />
                <button className={"NewNoteButton"} type="submit">
                    +
                </button>
            </form>
        </div>
    );

};

FieldButton.defaultProps = {
    value: ""
};

FieldButton.propTypes = {
    value: PropTypes.string,
    handleClick: PropTypes.func,
    handleChange: PropTypes.func
};

export default FieldButton;