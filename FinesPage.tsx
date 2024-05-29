
import React from 'react';
import {  FaPlus, FaEdit } from 'react-icons/fa';
import '../styles/FinesPage.css';
import SearchBar from './SearchBar';

const FinesPage: React.FC = () => {
    return (
        <div className="fines-container">
            <div className="fines-header">
               <SearchBar />
                <button className="create-fine-button">
                    <FaPlus className="create-fine-icon" /> Create Fine
                </button>
            </div>
            <table className="fines-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>REG.NO</th>
                        <th>ORGANIZATION</th>
                        <th>ADDRESS</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>AB11222</td>
                        <td>EasyPark</td>
                        <td>Stigsborg Mobilitetshus</td>
                        <td>Paid Ticket</td>
                        <td>Active</td>
                        <td><FaEdit className="edit-icon" /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>AB11222</td>
                        <td>EasyPark</td>
                        <td>Stigsborg Mobilitetshus</td>
                        <td>Subscription</td>
                        <td>Inactive</td>
                        <td><FaEdit className="edit-icon" /></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>AB11222</td>
                        <td>EasyPark</td>
                        <td>Stigsborg Mobilitetshus</td>
                        <td>Subscription</td>
                        <td>Inactive</td>
                        <td><FaEdit className="edit-icon" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FinesPage;
