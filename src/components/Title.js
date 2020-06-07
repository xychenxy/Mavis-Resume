import React from 'react';
import UnderLine from "./Underline";
export default function Title({title, subtitle}){
    return (
        <>
            <div className="row my-2 justify-content-center">
                <div className="col text-center">
                    <h1 className="text-uppercase component-title">{title}</h1>
                    <h4 className="text-capitalize text-muted">{subtitle}</h4>
                    <UnderLine/>
                </div>
            </div>
        </>
    )
}