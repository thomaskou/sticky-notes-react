import * as React from "react";
import PropTypes from "prop-types";
import "../styles/Note.css";

const Note = (props) => {

    function onClick() {
        props.onClick();
    }

    function onMouseEnter() {
        props.onMouseEnter();
    }

    function onMouseLeave() {
        props.onMouseLeave();
    }

    return (
        <div
            className={"Note"}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <h4 className={"NoteText"}>{props.note}</h4>
            <div className={"NoteClose"} onClick={onClick}>×</div>
        </div>
    );

};

Note.defaultProps = {
    note: ""
};

Note.propTypes = {
    note: PropTypes.string,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
};

export default Note;