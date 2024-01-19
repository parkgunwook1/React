// Main.js

import React from 'react';
import './css/Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <main className="main">
        {[...Array(12).keys()].map((index) => (
          <div key={index} className="product">
            {/* 각 상품의 내용 및 이미지를 여기에 추가 */}
            <img
              src={`https://source.unsplash.com/featured/?mountain,hiking/${index + 1}`}
              alt={`Product ${index + 1}`}
            />
            <p>Mount {index + 1}</p>
          </div>
        ))}
      </main>
      <footer className="footer">
        {/* Footer의 내용을 여기에 추가 */}
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Main;
