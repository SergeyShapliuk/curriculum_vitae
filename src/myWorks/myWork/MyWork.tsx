import React from "react";
import s from "./MyWork.module.scss";

type MyWorkPropsType = {
    title: string;
    description: string;
    style: any;
    hrefDemo?: string;
    hrefCode?: string;
    androidLink?: string;
    android?: any;
    iosLink?: string;
    ios?: any;
}

function MyWork({hrefDemo, hrefCode, title, description, style, android, androidLink, ios, iosLink}: MyWorkPropsType) {

    return (
        <div className={s.myWork}>
            <div className={s.imageContainer} style={style}>
                {android || ios ? (
                    <div className={s.viewButtonApps}>
                        <a href={androidLink} target={"_blank"} title={"Android"} rel="noreferrer"
                           style={{
                               position: "relative",
                               width: "30%",
                               // maxHeight:'70%',
                               minHeight: "45%",
                               display: "flex",
                               justifyContent: "center",
                               alignItems: "center",
                               // top: 0,
                               // left: 0,
                               // right: 0,
                               // bottom: 0,
                               borderRadius: "25%",
                               backgroundColor: "white"
                           }}>
                            <img src={android} className={s.imageApp}/>
                        </a>
                        <a href={iosLink} target={"_blank"} title={"IOS"} rel="noreferrer"
                           style={{
                               position: "relative",
                               width: "30%",
                               // maxHeight:'70%',
                               minHeight: "45%",
                               display: "flex",
                               justifyContent: "center",
                               alignItems: "center",
                               borderRadius: "25%",
                               backgroundColor: "white"
                           }}>
                            <img src={ios} className={s.imageApp}/>
                        </a>
                    </div>
                ) : (
                    <a href={hrefDemo} target={"_blank"} title={"Hosted by Heroku."}
                       className={s.viewButton}
                       rel="noreferrer">Click
                        to view</a>
                )}
            </div>
            <div className={s.projectInfo}>
                <div className={s.mobileContainer}>
                    <h3 className={s.projectTitle}>{title}</h3>
                    {/*{android && ios &&*/}
                    {/*<>*/}
                    {/*    <a href={hrefDemo} target={"_blank"} title={"Android"} rel="noreferrer"*/}
                    {/*       className={s.linkAppImage}>*/}
                    {/*        <img src={android} className={s.imageApp}/>*/}
                    {/*    </a>*/}
                    {/*    <a href={hrefDemo} target={"_blank"} title={"IOS"} rel="noreferrer"*/}
                    {/*       className={s.linkAppImage}>*/}
                    {/*        <img src={ios} className={s.imageApp}/>*/}
                    {/*    </a>*/}
                    {/*</>*/}
                    {/*}*/}
                </div>
                <span className={s.description}>{description}
                    {hrefCode && <a href={hrefCode} target={"_blank"} style={{
                        color: "black",
                        fontWeight: "bold",
                        textDecoration: "underline"
                    }} rel="noreferrer">View code...</a>}</span>
            </div>
        </div>
    );
}

export default MyWork;
