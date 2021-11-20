import React from 'react'


function ListRecord(props) {
    return (
        <tr>
            <td>{props.status}</td>            
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.company}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    )
}

export default ListRecord