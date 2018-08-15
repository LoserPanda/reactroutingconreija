import React from 'react';

import Kayttaja from "./Kayttaja";

class Kayttajalista extends React.Component {
    render() {
        const deleteUser = this.props.deleteUser;
        var kayttajat = this.props.kayttajat.map(kayttaja =>
            <Kayttaja deleteUser={deleteUser} key={kayttaja.id} kayttaja={kayttaja}/>
        );
        return (
            <div className="div">
                <h1>List of Users</h1>
                <table id="kayttajat">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Age</th>
                        <th>Id</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {kayttajat}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Kayttajalista;