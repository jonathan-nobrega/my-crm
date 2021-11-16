import React from 'react'
import ListRecord from './ListRecord'
import Customers from '../../../data/customers'


function ListPanel() {
    return (
        <div>
            <h2>All customers</h2>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Status</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Customers.map((customer) => {
                            return (
                                <ListRecord
                                    status={customer.status}
                                    id={customer._id}
                                    name={customer.name}
                                    company={customer.company}
                                    email={customer.email}
                                    phone={customer.phone}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListPanel