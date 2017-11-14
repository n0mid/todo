import React, { Component } from 'react';
import TODOItem  from './TODOItem';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            titleNew: ''
        }
    }

    componentDidMount() {
        this.setState({
            items: [{
                id: 1,
                title: 'title1',
                done: false
            }, {
                id: 2,
                title: 'title2',
                done: false
            }, {
                id: 3,
                title: 'title3',
                done: true
            }]
        });
    }



  render() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">TODO app</a>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="input-field col s10">
                        <input placeholder="Title"
                               type="text"
                               value={this.state.titleNew }
                               onChange={(e) => this._changeTitleNew(e)} />
                    </div>
                    <div className="input-field col s2">
                        <button className="btn add-button"
                                onClick={() =>  this._add()}
                                disabled={!this.state.titleNew}>
                            Add
                        </button>
                    </div>
                </div>
                <ul className="collection">
                    { this.state.items.map(item => <TODOItem key={ item.id}
                                                             item={ item }
                                                             change={(id) => this._change(id) }
                                                             remove={(id) => this._remove(id) } />) }
                </ul>
            </div>
        </div>
    );
  }

    _changeTitleNew(e) {
        this.setState({
            titleNew: e.target.value
        });
    };

    _add() {
        let item = {
            id: Math.floor(Math.random() * 100000),
            title: this.state.titleNew,
            done: false
        };

        this.setState({
            items: [item, ...this.state.items],
            titleNew: ''
        })

    }

    _change(id) {
        let items = [...this.state.items];

        let item = items.find( item => item.id === id);
        item.done = !item.done;

        this.setState({
            items: items
        })
    }

    _remove(id) {
        let items = [...this.state.items];

        let index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items.splice(index, 1);
        }

        this.setState({
            items: items
        });
    }
}

export default App;
