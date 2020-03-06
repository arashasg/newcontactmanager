import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function TextInput({name,type,onChange,placeholder,label,value,error}) {
    return (
        <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <input type={type}
                      value={value}
                      onChange={onChange} 
                      name={name} 
                      className={classnames("form-control form-control-md",{
                          "is-invalid":error
                      })}
                      placeholder={placeholder} />
                      <div className="invalid-feedback">
                        {error}
                      </div>
                </div>
    )
}

TextInput.propTypes = {
    name:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    placeholder:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired
}
TextInput.defaultProps={
    type:"text"
}

export default TextInput

