import * as React from "react";
import NoteList from "../containers/NoteList";
import FieldButton from "../components/FieldButton";
import "../styles/Main.css";

class Main extends React.Component {

    state = {
        noteList: [],
        fieldValue: "",
        moused: [],
        clicked: false
    };

    handleFieldChange = (event) => {
        this.setState({fieldValue: event.target.value})
    };

    handleFieldSubmit = () => {
        if (this.state.fieldValue.length > 0) {
            this.setState({
                noteList: [...this.state.noteList, {
                    note: this.state.fieldValue,
                    xPos: Math.random() * 600,
                    yPos: Math.random() * 300
                }],
                fieldValue: "",
                moused: [...this.state.moused, false]
            });
        } else {
            alert("Input cannot be empty.");
        }
    };

    deleteNote = (index) => {
        let newList = this.state.noteList;
        newList.splice(index, 1);
        //console.log(newList);
        let newMoused = this.state.moused;
        newMoused.splice(index, 1);
        this.setState({
            noteList: newList,
            moused: newMoused,
            clicked: false
        });
    };

    handleMouseEnter = (index) => {
        //console.log("Mouse entered " + index);
        if (!(this.state.clicked)) {
            let newMoused = this.state.moused;
            newMoused[index] = true;
            this.setState({moused: newMoused});
        }
    };

    handleMouseLeave = (index) => {
        //console.log("Mouse left " + index);
        if (!(this.state.clicked)) {
            let newMoused = this.state.moused;
            newMoused[index] = false;
            this.setState({moused: newMoused});
        }
    };

    handleMouseDown = () => {
        this.setState({clicked: true});
    };

    handleMouseUp = () => {
        this.setState({clicked: false});
    };

    handleMouseMove = (event) => {
        //console.log(this.state.moused);
        if (this.state.clicked) {
            let index = -1;
            for (let k = 0; k < this.state.moused.length; k++) {
                if (this.state.moused[k]) index = k;
            }
            if (index === -1) return;
            let newList = this.state.noteList;
            newList.splice(index, 1, {
                note: newList[index].note,
                xPos: event.clientX - 80,
                yPos: event.clientY - 60
            });
            this.setState({noteList: newList});
        }
    };

    render() {
        return (
            <div
                className={"Main"}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseMove={this.handleMouseMove}
            >
                <NoteList
                    className={"NoteList"}
                    noteList={this.state.noteList}
                    deleteNote={this.deleteNote}
                    handleMouseEnter={this.handleMouseEnter}
                    handleMouseLeave={this.handleMouseLeave}
                />
                <FieldButton
                    value={this.state.fieldValue}
                    handleChange={this.handleFieldChange}
                    handleClick={this.handleFieldSubmit}
                />
            </div>
        );
    }

}

export default Main;