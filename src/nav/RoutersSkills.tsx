import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Education from "../skills/skill/Education";
import SkillItem from "../skills/skillsLinesItem/SkilIsLinesItem";



function Routers(){
    return(
        <div>
          <Routes>
              <Route path={'/educ'} element={<Education/>}/>
              <Route path={'/lines'} element={<SkillItem/>}/>
          </Routes>


        </div>
    )
}
export default Routers;