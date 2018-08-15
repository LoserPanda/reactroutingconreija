import React, {Component} from 'react';

class Kayttajaform extends Component {
    handleEtunimiChange = (e) => {
        const uusinimi = e.target.value;
        this.setState({etunimi: uusinimi});
    };
    handleIkaChange = (e) => {
        this.setState({ika: e.target.value});
    };

    handleCreateClick = (e) => {
        e.preventDefault();
        this.props.addData(this.state);
        this.setState({etunimi: '', ika: ''});
    };

    state = {etunimi: '', ika: '', id: ''};

    render() {
        return (
            <div className="div">
                <h1>Submit New User</h1>
                <form>
                    <label htmlFor="etunimi">First Name</label>
                    <input name="etunimi" type="text" value={this.state.etunimi} onChange={this.handleEtunimiChange} autoFocus/>
                    <label htmlFor="ika">Age</label>
                    <input name="ika" type="text" value={this.state.ika} onChange={this.handleIkaChange}/>
                    <input type="submit" value="Create" onClick={this.handleCreateClick}/>
                </form>
            </div>
        )
    }
}

export default Kayttajaform;