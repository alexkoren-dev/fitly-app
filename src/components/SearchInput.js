import React, {useState} from 'react'
import {
  CLink,
  CFormGroup,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupText,
  CLabel,
  CInput,
  CForm
} from "@coreui/react"
import CIcon from "@coreui/icons-react"


const SearchInput = ({history}) => {
	const [searchKey, setSearchKey] = useState(null)

	const onFormSubmit = (e) => {
		e.preventDefault()

		if(searchKey)
			history.push(`/search/${searchKey}`)
	}

	const onInputChange = (e) => {
		e.preventDefault()
		setSearchKey(e.target.value)
	}

	return (
		<CForm className="w-100" onSubmit={(e) => onFormSubmit(e)}>
      <CFormGroup className="mb-0 w-100 mx-auto" style={{maxWidth: 500}}>
        <div className="controls search-input">
          <CInputGroup>
            <CInput
              id="appendedInput"
              size="16"
              type="text"
              placeholder="Search for a Trainer or live classes"
              onChange={(e) => onInputChange(e)}
            />
            <CInputGroupAppend>
              <CInputGroupText>
                <span className="divider">
                  <CIcon name="cuSearch" w-100idth="18" height="22" />
                </span>
              </CInputGroupText>
            </CInputGroupAppend>
          </CInputGroup>
        </div>
      </CFormGroup>
    </CForm>
	)
}

export default SearchInput