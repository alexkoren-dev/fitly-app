import React, { useState } from "react"
import Radio from "@material-ui/core/Radio"
import { withStyles } from "@material-ui/core/styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const WhiteRadio = withStyles({
  root: {
    color: "white",
    "&$checked": {
      color: "white",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />)

const MRadio = (props) => <FormControlLabel {...props} control={<WhiteRadio />} />

export default MRadio
