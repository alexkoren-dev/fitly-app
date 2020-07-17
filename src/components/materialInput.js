import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/core/styles"

const CssTextField = withStyles({
  root: {
    "& .MuiInputLabel-root": {
      marginLeft: 10,
      color: "white",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField)

const MInput = (props) => <CssTextField {...props} />

export default MInput
