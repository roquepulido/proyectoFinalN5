import React from "react";
import Select from "react-select";

function SelectMultiple({ list, name, id, onChange, value }) {
    return (
        <Select
            id={id}
            onChange={onChange}
            value={value}
            isMulti
            name={name}
            options={list}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    );
}

export default SelectMultiple;
