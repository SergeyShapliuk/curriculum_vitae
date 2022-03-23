import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Education from "../skills/skill/Education";
import SkillItem from "../skills/skillsLinesItem/SkilIsLinesItem";
import Experience from "../skills/skill/Experience";



function RoutersSkills(){
    return(
        <div>
          <Routes>
              <Route path={'/about/experience'} element={<Experience/>}/>
              <Route path={'/about/educ'} element={<Education/>}/>
              <Route path={'/about/lines'} element={<SkillItem/>}/>

              <Route path={'*'} element={<Navigate to={'/about/experience'}/>}/>
          </Routes>


        </div>
    )
}
export default RoutersSkills;