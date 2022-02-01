import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "../main/Main";
import Skills from "../skills/Skills";
import Contacts from "../contacts/Contacts";



function Routers(){
    return(
        <div>
          <Routes>
              <Route path={'/'} element={<Main/>}/>
              <Route path={'/about'} element={<Skills/>}/>
              <Route path={'/contacts'} element={<Contacts/>}/>

              <Route path={'/404'} element={<h1>404: PAGE NOT FOUND</h1>}/>
              <Route path={'*'} element={<Navigate to={'/404'}/>}/>


          </Routes>


        </div>
    )
}
export default Routers;