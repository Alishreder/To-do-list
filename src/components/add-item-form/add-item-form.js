import React from "react";

import "./add-item.css"

export default class AddItemForm extends React.Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="add-button d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What need to be done"
                       value={this.state.label}
                />
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => this.props.onItemAdded(this.state.label)}>
                    Add new Item
                </button>
            </form>
        );
    };
};