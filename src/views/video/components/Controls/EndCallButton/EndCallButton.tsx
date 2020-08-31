import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import CallEnd from '@material-ui/icons/CallEnd';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import useVideoContext from '../../../hooks/useVideoContext/useVideoContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
      background: "#cb3d3e",
      color: "white",
      '&:hover': {
        background: "#d94a4b"
      },
      '&:focus': {
        outline: 'none'
      }
    },
  })
);

export default function EndCallButton() {
  const classes = useStyles();
  const { room } = useVideoContext();

  return (
    <Tooltip title={'End Call'} onClick={() => room.disconnect()} placement="top" PopperProps={{ disablePortal: true }}>
      <Fab className={classes.fab} color="primary">
        <CallEnd />
      </Fab>
    </Tooltip>
  );
}
