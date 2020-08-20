import React, { Component } from "react"
import Select from "react-select"

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "black",
  }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: 15,
    backgroundColor: "transparent",
    border: "1px solid white",
    color: "white",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "white",
  }),
  singleValueLabel: (provided) => ({
    ...provided,
    color: "white",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    borderRadius: "50%",
    padding: 0,
    margin: 4,
    width: 15,
    height: 15,
  }),
  valueContainer: (provided) => ({
    ...provided,
    marginLeft: 0,
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: 0,
    boxShadow: "none",
    borderColor: "white",
    "&:hover": {
      borderBottomWidth: 2,
    },
  }),
  placeholder: () => ({
    color: "white",
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
  }),
  dropdownIndicator: (provide) => ({
    color: "white",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "white",
    "&:hover": {
      color: "white",
    },
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = "opacity 300ms"
    const color = "white"

    return { ...provided, opacity, transition, color }
  },
}

const MSelect = (props) => <Select {...props} styles={customStyles} />

export default MSelect
