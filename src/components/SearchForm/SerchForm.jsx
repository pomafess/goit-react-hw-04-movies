import React, { Component } from 'react'


class SerchForm extends Component {
    state = { query: '' }
    
    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
}

    render() {
        const { handleSubmit, handleChange } = this;
        return (
            <div>
            <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                         autoComplete="off"
                         autoFocus
                         placeholder="Введите название фильма"
                        value={this.state.query}
                        onChange={handleChange}/>
                    <button type="submit">Поиск фильма</button>
            </form>
                
            </div>
        )
    }
}

export default SerchForm