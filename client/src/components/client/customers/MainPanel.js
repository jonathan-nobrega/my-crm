import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'


async function addCustomer(info) {

    console.log(info)
    return fetch('http://localhost:8000/addCustomer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    }).then(data => data.json())
}

export default function MainPanel() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneId, setPhoneId] = useState()
    const [phone, setPhone] = useState()
    const [company, setCompany] = useState()

    const handleNewCustomer = async e => {
        console.log('entrou no handleNewCustomer')
        e.preventDefault()
        const add = await addCustomer({
            name,
            email,
            company,
            phone: phoneId + " " + phone,
        });
        console.log('resposta do add: ' + add)
    }

    return (
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Customers</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" onClick={handleShow} class="btn btn-sm btn-outline-secondary">
                    <i class="bi bi-plus"></i>
                    Add customer
                </button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Woohoo, you're reading this text in a modal!</p>
                        <div class="modal-body p-4 pt-0">
                            <form>
                                <div class="mb-3">
                                    <label for="floatingInput">Name</label>
                                    <input
                                        type="text"
                                        class="form-control rounded-4"
                                        id="floatingName"
                                        placeholder="John Wick"
                                        onChange={e => setName(e.target.value)}
                                        required />
                                </div>
                                <div class="mb-3">
                                    <label for="floatingPassword">Email</label>
                                    <input
                                        type="text"
                                        class="form-control rounded-4"
                                        id="floatingEmail"
                                        placeholder="wick@gmail.com"
                                        onChange={e => setEmail(e.target.value)}
                                        required />
                                </div>
                                <div class="form-row">
                                    <div class="form col-md-4">
                                        <label for="inputState">Country code</label>
                                        <select id="inputState" class="form-control" onChange={e => setPhoneId(e.target.value)}>
                                            <option selected>Choose..</option>
                                            <option>US +1</option>
                                            <option>Brazil +55</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="floatingPassword">Phone</label>
                                        <input
                                            type="text"
                                            class="form-control rounded-4"
                                            id="floatingEmail"
                                            placeholder="123 456 789"
                                            onChange={e => setPhone(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="floatingPassword">Company</label>
                                    <input
                                        type="text"
                                        class="form-control rounded-4"
                                        id="floatingEmail"
                                        placeholder="Space Y LLC"
                                        onChange={e => setCompany(e.target.value)}
                                        required />
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleNewCustomer, handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}