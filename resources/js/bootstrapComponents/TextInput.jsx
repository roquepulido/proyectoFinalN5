import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="d-flex flex-columns justify-content-start">
            <input
                {...props}
                type={type}
                className={"" + className}
                ref={input}
            />
        </div>
    );
});
