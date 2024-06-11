// src/components/FileTable.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FileTable = ({ files, view }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {files.map(file => (
                    <tr key={file.id}>
                        <th scope="row">{file.id}</th>
                        <td><img src={file.imageUrl} alt={file.name} style={{ height: '50px' }} /></td>
                        <td>{file.name}</td>
                        <td>{file.description}</td>
                        <td>
                            <div className="d-flex justify-content-evenly align-items-center">
                                <Link to={`/file/${file.id}`} className="btn btn-primary mr-2">View Details</Link>
                                <a href={file.downloadUrl} className="btn btn-success" download>Download</a>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FileTable;
