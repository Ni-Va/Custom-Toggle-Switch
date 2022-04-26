import React from 'react';

const Switch = ({ isOn, handleToggle, id, onColor, offColor }) => {
  return (
    <>
        <input
          onChange={handleToggle}
          className="switch-checkbox"
          id={id}
          type="checkbox"
        />
        <label
          style={{ background: isOn ? onColor : offColor }}
          className="switch-label"
          htmlFor={id}
        >
          <span className={`switch-button`} />
        </label>
    </>
  );
};

export default Switch;