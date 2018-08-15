import React from 'react';
import deleteimage from './../deleteimage.png';

class Kayttaja extends React.Component {
    handleDeleteClick = (e) => {
        e.preventDefault();
        this.props.deleteUser(this.props.kayttaja.id);
    };
    render() {
        return (
            <tr className='tieto'>
                <td className='ika'>{this.props.kayttaja.etunimi}</td>
                <td className='ika'>{this.props.kayttaja.ika}</td>
                <td className='ika'>{this.props.kayttaja.id}</td>
                <td><a href="" onClick={this.handleDeleteClick}><img src={deleteimage} alt={'Delete'}/></a></td>
            </tr>
        )
    }
}

export default Kayttaja;