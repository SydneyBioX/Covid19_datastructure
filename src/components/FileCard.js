// src/components/FileCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FileCard = ({ file, view }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={file.imageUrl} className="card-img-top p-3" alt={file.name} />
                <div className="card-body">
                    <h4 className="card-title text-center">{file.name}</h4>
                    <p className="card-text">{file.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/file/${file.id}`} className="btn btn-primary mr-2">View Details</Link>
                        <a href={file.downloadUrl} className="btn btn-success" download>Download</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FileCard;
