import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"

const FixedWelcomeUser = () => {
	const auth = useSelector((state) => state.auth)
	const [isOpen, setOpen] = useState(false)
	const profile = auth.profile
  const user_type = (auth.userInfo || {}).userType

  useEffect(() => {
  	if(auth.is_authed) {
		  const timer = setTimeout(() => {
		    setOpen(true)

		    setTimeout(() => {
			    setOpen(false)
			  }, 4000);

		  }, 1000);

		  return () => clearTimeout(timer);
		}
	}, [auth.is_authed]);

  if(!auth.is_authed)
  	return null

	return (
		<div 
			onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`fixed-welcome-wrapper pl-2 ${isOpen?'open':'close'}`}
    >
			<div 
				className="fixed-welcome bg-primary d-flex align-items-center justify-content-center">
				{profile &&
	        profile.profileImage &&
	        profile.profileImage.url && 
	          <div className="img-round mr-2">
	            <img
	              src={profile.profileImage.url}
	              width="50"
	              height="50"
	              style={{ borderRadius: "50%" }}
	            />
	          </div>
	      }

	      <div>
	      	<p className="text-white mb-0"><i>{profile && profile.firstName && ('Hey there, ' + profile.firstName)}</i></p>
	      	<h5 className="text-white mb-0"><strong>WELCOME TO FITLY</strong></h5>
	      </div>
			</div>
		</div>
	)
}

export default FixedWelcomeUser