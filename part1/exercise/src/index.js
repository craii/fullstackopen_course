import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


// let counter= 1;

// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <App counter={counter} />
//   )
// };

// setInterval(
//     () =>{
//       refresh();
//       counter += 1;
//     }, 1000
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
