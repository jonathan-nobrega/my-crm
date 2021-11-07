import React from "react";
import ClientHeader from '../components/ClientPage/ClientHeader'
import SideBar from '../components/ClientPage/SideBar'
import MainPanel from '../components/ClientPage/MainPanel'
import ListPanel from '../components/ClientPage/ListPanel'
import '../css/clientPage.css';

function asd() {
    return (
        <div>
            <body>
                <ClientHeader />
                <SideBar />
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <MainPanel />
                    <ListPanel />
                </main>
            </body>
        </div>
    )
};

export default asd;

