import React from "react";


type CloseButtonPropsType = {
    onPress: () => void
    isSelected: boolean
}
const CloseButton = ({onPress, isSelected}: CloseButtonPropsType) => {
        // const inverted = useDeprecatedInvertedScale();
        // const x = isSelected ? 30 : 0;
        // const y = x;
        return (
            <div
                // initial={false}
                // animate={{x, y}}
                // layout
                // transition={isSelected ? openSpring : closeSpring}
                // transformTemplate={scaleTranslate}
                onClick={onPress} style={{
                // ...inverted, originX: 0, originY: 0,
                position: "absolute",
                width: 25,
                height: 25,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: 30,
                right: 30,
                borderRadius: 50,
                backgroundColor: "rgba(255,255,255,0.2)",
                // padding:0,
                zIndex: 3,
                cursor: "pointer",
            }}>
                <div style={{
                    position: "absolute",
                    width: "60%",
                    height: 2,
                    // marginVertical: 1.5,
                    backgroundColor: "white",
                    rotate: "45deg"
                }}/>
                <div style={{
                    position: "absolute",
                    width: "60%",
                    height: 2,
                    // marginVertical: 1.5,
                    backgroundColor: "white",
                    rotate: "-45deg"
                }}/>
            </div>
        );
    }
;

export default CloseButton;

// const scaleTranslate = ({x, y, scaleX, scaleY}: any) =>
//     `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
