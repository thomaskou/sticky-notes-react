import * as React from "react";
import PropTypes from "prop-types";
import Note from "../components/Note";

const NoteList = (props) => {

    function createNote(item, index) {

        function handleClick() {
            props.deleteNote(index);
        }

        function onMouseEnter() {
            props.handleMouseEnter(index);
        }

        function onMouseLeave() {
            props.handleMouseLeave(index);
        }

        return (
            <div style={{
                position: "absolute",
                left: item.xPos + "px",
                top: item.yPos + "px"
            }}>
                <Note
                    note={item.note}
                    onClick={handleClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                />
            </div>
        );

    }

    return (
        <React.Fragment>
            {props.noteList.map(createNote)}
        </React.Fragment>
    );

};

NoteList.defaultProps = {
    noteList: [{note: "Yo", xPos: 20, yPos: 20}]
};

NoteList.propTypes = {
    noteList: PropTypes.array,
    handleMouseEnter: PropTypes.func,
    handleMouseLeave: PropTypes.func
};

export default NoteList;