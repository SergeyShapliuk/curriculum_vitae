import React, {useEffect, useState} from "react";
import "./App.scss";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import HeaderSkills from "./header/HeaderSkills";
import {Fade} from "react-awesome-reveal";
import Header from "./header/Header";
import {presets, spring, StaggeredMotion} from "react-motion";
import range from "lodash.range";


function App() {
    const [target, setTarget] = useState<{ x: number, y: number }>({x: 250, y: 300});

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
    }, []);

    const handleMouseMove = ({pageX: x, pageY: y}: any) => {
        setTarget({x, y});
    };

    const handleTouchMove = ({touches}: any) => {
        handleMouseMove(touches[0]);
    };
    const getStyles = (prevStyles: any) => {
        // `prevStyles` is the interpolated value of the last tick
        const endValue = prevStyles.map((_: any, i: any) => {
            return i === 0
                ? target
                : {
                    x: spring(prevStyles[i - 1].x, presets.gentle),
                    y: spring(prevStyles[i - 1].y, presets.gentle)
                };
        });
        return endValue;
    };
    return (
        <div className="app">
            <StaggeredMotion
                defaultStyles={range(7).map(() => ({x: 0, y: 0}))}
                styles={getStyles}>
                {balls =>
                    <div className="demo1" style={{
                        position: "absolute",
                        zIndex:0
                    }}>
                        {balls?.map(({x, y}: any, i: any) =>
                            <div
                                 key={i}
                                 className={`demo1-ball ball-${i}`}
                                 style={{
                                     WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                                     transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                                     zIndex: balls.length - i
                                 }}/>
                        )}
                    </div>
                }
            </StaggeredMotion>
            <Header/>
            <Fade cascade damping={0.1}>
                <Main/>
                <Skills/>
                <HeaderSkills/>
                <MyWorks/>
                <Contacts/>
                <Footer/>
            </Fade>

        </div>
    );
}

export default App;
