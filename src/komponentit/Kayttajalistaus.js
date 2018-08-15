import React, {Component} from 'react';
import Kayttajalista from "./Kayttajalista";

class Kayttajalistaus extends Component {
    state = {kayttajat: []};

    componentDidMount() {
        let itse = this;
        fetch('/kayttajat')
            .then((resp) => {
                return resp.json();
            })
            .then((olio) => {
                itse.setState({kayttajat: olio});
                console.log("tuo", olio);
            })

    };

    deleteUser = (userId) => {
        fetch('/kayttajat/' + userId, {
            method: 'DELETE'
        })
            .then(resp => {
                console.log("the list after deletion", resp)
                this.componentDidMount();

            });
    };

    render() {
        return (
            <div id="content">
                <Kayttajalista deleteUser={this.deleteUser} kayttajat={this.state.kayttajat}/>
            </div>
        );
        // });
    }
}

export default Kayttajalistaus;