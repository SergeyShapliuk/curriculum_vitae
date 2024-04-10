import {RefObject, useEffect} from "react";
import {useDomEvent, MotionValue} from "framer-motion";
import {animate, inertia, linear, spring} from "popmotion";
import {mix} from "@popmotion/popcorn";
import {debounce} from "lodash";
import {useSpring} from "react-spring";

interface Constraints {
    top: number;
    bottom: number;
}

// Absolute distance a wheel scroll event can travel outside of
// the defined constraints before we fire a "snap back" animation
const deltaThreshold = 5;

// If wheel event fires beyond constraints, multiple the delta by this amount
const elasticFactor = 0.2;

let startedAnimation = false;

function springTo(value: MotionValue, from: number, to: number) {
    console.log("springTo", from, to);
    if (value.isAnimating() || startedAnimation) return;
    console.log("springTo", from, to);
    const animation = animate({
        from: from,
        to: to,
        type: "spring",
        velocity: value.getVelocity(),
        stiffness: 400,
        damping: 40,
        repeatDelay: 100,
        // restSpeed:1,
        // duration:400,
        // bounce:1,
        onUpdate: latest => value.set(latest),
        onComplete: () => startedAnimation = false
    });
    return () => animation.stop();

}

const debouncedSpringTo = debounce(springTo, 100);

/**
 * Re-implements wheel scroll for overlflow: hidden elements.
 *
 * Adds Apple Watch crown-style constraints, where the user
 * must continue to input wheel events of a certain delta at a certain
 * speed or the scrollable container will spring back to the nearest
 * constraint.
 *
 * Currently achieves this using event.deltaY and a debounce, which
 * feels pretty good during direct input but it'd be better to increase
 * the deltaY threshold during momentum scroll.
 *
 * TODOs before inclusion in Framer Motion:
 * - Detect momentum scroll and increase delta threshold before spring
 * - Remove padding hack
 * - Handle x-axis
 * - Perhaps handle arrow and space keyboard events?
 *
 * @param ref - Ref of the Element to attach listener to
 * @param y - MotionValue for the scrollable element - might be different to the Element
 * @param constraints - top/bottom scroll constraints in pixels.
 *  * @param {(e: WheelEvent) => void} onWheelCallback - Функция обратного вызова для события прокрутки колеса.
 * @param isActive - `true` if this listener should fire.
 */
export function useWheelScroll(
    ref: RefObject<Element>,
    y: MotionValue<number>,
    constraints: Constraints | null,
    onWheelCallback: (e: WheelEvent) => void,
    isActive: boolean
) {
    useEffect(() => {
        const onWheel = (event: WheelEvent) => {
            event.preventDefault();
            if (!isActive) return;
            const currentY = y.get();
            let newY = currentY - event.deltaY;
            const isWithinBounds =
                constraints && newY >= constraints.top && newY <= constraints.bottom;
            console.log("isWithinBounds0",constraints&& newY >= constraints.top);
            console.log("isWithinBounds-1", constraints&&newY <= constraints.bottom);
            if (constraints && !isWithinBounds) {
                newY = mix(currentY, newY, elasticFactor);
                console.log("isWithinBounds", event.type);
                console.log("isWithinBounds2", deltaThreshold);
                console.log("isWithinBounds3",newY < constraints.top);
                console.log("isWithinBounds4", event.deltaY >= deltaThreshold);
                // if (newY < constraints.top) {
                    newY = mix(currentY, newY, elasticFactor);

                    // Определяем направление прокрутки
                    const isScrollingUp = event.deltaY > 0;

                    // Устанавливаем новое положение в пределах ограничений
                    newY = isScrollingUp ? constraints.top : constraints.bottom;
                // }

                // if (newY > constraints.bottom) {
                //     if (event.deltaY >= -deltaThreshold) {
                //         springTo(y, newY, constraints.bottom);
                //         startedAnimation = true;
                //     }
                    // else {
                    //     debouncedSpringTo(y, newY, constraints.bottom);
                    // }
                // }
            }

            if (!startedAnimation) {
                y.stop();
                y.set(newY);
            }
            // else {
            //     debouncedSpringTo.cancel();
            // }

            onWheelCallback(event);
        };

        if (isActive && ref.current) {
            const element: any = ref.current;
            console.log("addEventListener");
            element.addEventListener("wheel", onWheel, {passive: false});
            return () => {
                element.removeEventListener("wheel", onWheel);
            };
        }
    }, [isActive, constraints, onWheelCallback, ref?.current, y.get()]);
}

// export function useWheelScroll(
//     ref: RefObject<HTMLLIElement>,
//     y: MotionValue<number>,
//     constraints: Constraints | null,
//     onWheelCallback: (e: any) => void,
//     isActive: boolean
// ) {
//     const onWheel = (event: WheelEvent) => {
//         event.preventDefault();
//
//         const currentY = y.get();
//         let newY = currentY - event.deltaY;
//         let startedAnimation = false;
//         const isWithinBounds =
//             constraints && newY >= constraints.top && newY <= constraints.bottom;
//
//         if (constraints && !isWithinBounds) {
//             newY = mix(currentY, newY, elasticFactor);
//
//             if (newY < constraints.top) {
//                 if (event.deltaY <= deltaThreshold) {
//                     springTo(y, newY, constraints.top);
//                     startedAnimation = true;
//                 } else {
//                     debouncedSpringTo(y, newY, constraints.top);
//                 }
//             }
//
//             if (newY > constraints.bottom) {
//                 if (event.deltaY >= -deltaThreshold) {
//                     springTo(y, newY, constraints.bottom);
//                     startedAnimation = true;
//                 } else {
//                     debouncedSpringTo(y, newY, constraints.bottom);
//                 }
//             }
//         }
//
//         if (!startedAnimation) {
//             y.stop();
//             y.set(newY);
//         } else {
//             debouncedSpringTo.cancel();
//         }
//
//         onWheelCallback(event);
//     };
//     // if (isActive) {
//     //     addDomEvent(ref, "wheel", onWheel, {passive: false});
//     // }
//
//     useDomEvent(ref, "wheel", onWheel, {passive: false});
//
//
// }
//     const {scale} = useSpring({scale: 1});
//
//     useEffect(() => {
//         return () => {
//             scale.stop();
//         };
//     }, [scale]);
//
//     useDomEvent(ref, 'wheel', (event:any) => {
//         event.preventDefault();
//         const delta = event.deltaY;
//         const newScale = Math.max(0.5, Math.min(2, scale.get() - delta * 0.01));
//         scale.set(newScale);
//     });
// // function addDomEvent(target: RefObject<Element>, eventName: string, handler: (event: WheelEvent) => void, options: any) {
// //     const element: any = target.current;
// //     element?.addEventListener(eventName, handler, options);
// //     return function () {
// //         return element?.removeEventListener(eventName, handler, options);
// //     };
// // }
// }
