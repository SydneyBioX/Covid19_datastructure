// src/components/FileDetail.js
import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

const FileDetail = ({view}) => {
    const { id } = useParams();
    const fileId = `File${id}`;

    // Dynamically import the file's detail component
    const FileComponent = lazy(() => import(`../details/${fileId}`));

    return (
        <div className="container mt-4">
            <Suspense fallback={<div>Loading...</div>}>
                <FileComponent />
            </Suspense>
            <a href="/" className="btn btn-secondary mt-4">Back</a>
        </div>
    );
};

export default FileDetail;
