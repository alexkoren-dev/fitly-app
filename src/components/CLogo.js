import React from 'react'
import LogoIcon from 'assets/logo-black.png'
import WhiteLogo from 'assets/logo-white.svg'

const CLogo = ({white, width}) => 
	<img src={white?WhiteLogo:LogoIcon} alt="logo" style={{width: '100%', maxWidth: (width || 120), minWidth: 100}}/>

export default CLogo