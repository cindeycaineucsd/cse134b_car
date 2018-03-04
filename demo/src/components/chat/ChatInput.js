import React, {PropTypes} from 'react';

const ChatInput = ({name, label, onChange, onKeyPress, placeholder, value, error}) => {

  return (
    <div>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default ChatInput;