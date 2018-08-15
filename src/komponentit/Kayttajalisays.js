import React, {Component} from 'react';
import Kayttajaform from "./Kayttajaform";

class Kayttajalisays extends Component {
    handleDataAdded = (p) => {
        console.log(p);
        console.log(JSON.stringify(p));
        fetch('/kayttajat', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(p)
        })
            .then(res => {
                // return res.json();
                alert("Käyttäjä lisätty oniistuneesti");
                this.componentDidMount();
            })
    };

    render() {
        return (
            <div id="content">
                <Kayttajaform addData={this.handleDataAdded}/>
            </div>
        );
        // });
    }
}

export default Kayttajalisays;