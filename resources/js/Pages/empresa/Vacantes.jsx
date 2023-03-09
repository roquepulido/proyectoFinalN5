import React from "react";

function Vacantes(props) {
    return (
        <>
            <div>Vacantes</div>
            <pre>{JSON.stringify(props, undefined, 2)}</pre>
        </>
    );
}

export default Vacantes;
