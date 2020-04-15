import React from 'react';
import './App.css';

import Header from '../Header'
import Main from "../Main";
import SelectOne from "../Select-one";
import EditTable from "../Edit-table";

function App() {
  return (
   <>
       <div className="cover">
           <div className="center">
               <Header />
               <EditTable/>
               {/*<Main/>*/}
               {/*<SelectOne/>*/}
               <footer className="footer">
                   <p> &copy; Підготував студент 2КН-17Б Гриценюк О.В.</p>
               </footer>
           </div>
       </div>
   </>
  );
}

export default App;
