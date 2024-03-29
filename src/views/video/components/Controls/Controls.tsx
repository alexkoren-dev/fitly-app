import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

import EndCallButton from './EndCallButton/EndCallButton';
import ToggleAudioButton from './ToggleAudioButton/ToggleAudioButton';
import ToggleVideoButton from './ToggleVideoButton/ToggleVideoButton';
import ToggleScreenShareButton from './ToogleScreenShareButton/ToggleScreenShareButton';

import useIsUserActive from './useIsUserActive/useIsUserActive';
import useRoomState from '../../hooks/useRoomState/useRoomState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: '#7070709e',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'absolute',
      justifyContent: 'space-between',
      left: '0px',
      top: '0px',
      padding: '20px 5px',
      zIndex: 1,
      transition: 'opacity 1.2s, transform 1.2s, visibility 0s 1.2s',
      opacity: 0,
      visibility: 'hidden',
      maxWidth: 'min-content',
      '&.showControls, &:hover': {
        transition: 'opacity 0.6s, transform 0.6s, visibility 0s',
        opacity: 1,
        visibility: 'visible',
      }
    },
  })
);

export default function Controls() {
  const classes = useStyles();
  const roomState = useRoomState();
  const isReconnecting = roomState === 'reconnecting';
  const isUserActive = useIsUserActive();
  const showControls = isUserActive || roomState === 'disconnected';

  return (
    <div className={clsx(classes.container, { showControls })}>
      <div className="">asdf</div>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <ToggleAudioButton disabled={isReconnecting} />
        <ToggleVideoButton disabled={isReconnecting} />
        {roomState !== 'disconnected' && (
          <>
            <ToggleScreenShareButton disabled={isReconnecting} />
            <EndCallButton />
          </>
        )}
      </div>
    </div>
  );
}
