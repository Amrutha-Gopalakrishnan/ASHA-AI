import React from "react";

const Load = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="d-flex align-items-center justify-content-center mt-2">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Load;