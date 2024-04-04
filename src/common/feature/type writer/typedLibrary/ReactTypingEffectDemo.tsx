import React from "react";
import ReactTypingEffect from "react-typing-effect";
import s from "../TypeWrite.module.scss";


function ReactTypingEffectDemo() {
    return (
        <div className={s.typeWrite}>
            <ReactTypingEffect
                className={s.s}
                text={["Frontend Develope", "Mobile Develope"]}
                cursor={"R"}
                cursorClassName={s.typeWriteCursor}
                speed={100}
                eraseDelay={1000}
                eraseSpeed={100}
                typingDelay={1000}
                displayTextRenderer={(text, i) => {
                    return (
                        <h3>
                            {text.split("").map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span
                                        key={key}
                                        // style={i%2 === 0 ? { color: 'yellow'} : {}}
                                    >{char}</span>
                                );
                            })}
                        </h3>
                    );
                }}
            />
        </div>
    );
};
export default ReactTypingEffectDemo;
