import React from "react";
import Select from "react-select";

function SelectMultiple({ list, name, id, onChange }) {
    return (
        <Select
            id={id}
            onChange={onChange}
            isMulti
            name={name}
            options={list}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    );
}

export default SelectMultiple;
