import React from "react";

const   StrippedContainter = (props) => {
    return(<>
        <div className="stripped" style={{ overflow: "hidden" }}>
        {/*<div className="overlay-stripped" style={props.vh != null ? {height: props.vh} : {}}></div>*/}
        <div className="z-proba">
            { props.children }
        </div>
      </div>
    </>)
}

export default StrippedContainter;