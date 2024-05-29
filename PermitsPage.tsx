
import React from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import '../styles/PermitsPage.css';
import SearchBar from './SearchBar';

const PermitsPage: React.FC = () => {
    return (
        <div className="permits-container">
            <div className="permits-header">
               <SearchBar />
                <button className="create-permit-button">
                    <FaPlus className="create-permit-icon" /> Create Permit
                </button>
            </div>
            <table className="permits-table">
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

export default PermitsPage;
