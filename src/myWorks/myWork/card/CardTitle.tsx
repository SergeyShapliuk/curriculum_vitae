import * as React from "react";
import {motion, useDeprecatedInvertedScale} from "framer-motion";
import {closeSpring, openSpring} from "./animations";
import s from "../MyWork.module.scss";

export const CardTitle = ({title, category, isSelected}: any) => {
    const inverted = useDeprecatedInvertedScale();
    const x = isSelected ? 30 : 15;
    const y = x;

    return (
        <motion.div
            className={s.title_container}
            initial={false}
            animate={{x, y}}
            layout
            transition={isSelected ? openSpring : closeSpring}
            transformTemplate={scaleTranslate}
            style={{...inverted, originX: 0, originY: 0}}
        >
            <span className={s.category}>{category}</span>
            {!isSelected&&<h2>{title}</h2>}
        </motion.div>
    );
};

const scaleTranslate = ({x, y, scaleX, scaleY}: any) =>
    `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
