import React from "react";
import ReactDOM from "react-dom";

var createReactClass =
    require("create-react-class")
var container =
    document.querySelector("#container");
var TodoItems =
    createReactClass({
      render: function() {
        var entries =
            this.props.entries;
        function createTask(item) {
          return <li key={item.key}>{item.text}</li>
        }
        var listItems =
            entries.map(createTask);
        return (
          <ul className="theList">
            {listItems}
          </ul>);
      }
    });
var TodoList =
    createReactClass({
      getInitialState: function() {
        return {
          items: []
        };
      },
      addItem: function(event) {
        var itemArray =
            this.state.items;
        itemArray.push(
          {
            text: this._inputElement.value,
            key: Date.now()
          }
        );
        this.setState({
          items: itemArray
        });
        console.log(
          "addItem: item added " + this._inputElement.value);
        for (let item of this.state.items) {
          console.log(
            "Item: " + item.text + "<" + item.key + ">");
        }
        this._inputElement.value = "";
        event.preventDefault(); //prevent default onSubmit
      },
      render: function() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input
                  ref={(a) => this._inputElement = a}
                  placeholder="what to do?">
                </input>
                <button type="submit">add</button>
              </form>
            </div>
            <TodoItems entries={this.state.items}/>
          </div>);
      }
    });
ReactDOM.render(
  <div>
    <TodoList/>
  </div>,
  container);

