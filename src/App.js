// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { FaTh, FaTable } from 'react-icons/fa';
import FileCard from './components/FileCard';
import FileTable from './components/FileTable';
import FileDetail from './components/FileDetail';
import files from './data/files';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [view, setView] = useState('cards');
    const location = useLocation();

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Multiview Data Structures</h1>
            {location.pathname === '/' && (
                <div className="d-flex justify-content-end mb-4">
                    <FaTh
                        className={`mr-3 ${view === 'cards' ? 'text-primary' : 'text-secondary'}`}
                        size={30}
                        onClick={() => setView('cards')}
                        style={{ cursor: 'pointer' }}
                    />
                    <FaTable
                        className={`${view === 'table' ? 'text-primary' : 'text-secondary'}`}
                        size={30}
                        onClick={() => setView('table')}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            )}
            <Routes>
                <Route path="/" element={
                    view === 'cards' ? (
                      <FileCardView files={files} view={view} />
                  ) : (
                      <FileTableView files={files} view={view} />
                  )
                } />
                <Route path="/file/:id" element={<FileDetail view={view} />} />
            </Routes>
        </div>
    );
};

const FileCardView = ({ files, view }) => (
  <div className="row">
      {files.map(file => (
          <FileCard key={file.id} file={file} view={view} />
      ))}
  </div>
);

const FileTableView = ({ files, view }) => (
  <FileTable files={files} view={view} />
);

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
