import React, { useState } from 'react';
const ProfileStatusWithHooks = props => {
  // -----------------------------------------------
  // let stateWithStateState = useState(true);
  // let editMode = stateWithStateState[0];
  // let setEditMode = stateWithStateState[1];
  // -----------------Равносильная запись ниже----------------

  let [editMode, setEditMode] = useState(false);

  let activateMode = () => {
    setEditMode(true);
  };
  let [status, setStatus] = useState(props.status);

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateMode}>
            {props.status || 'NO STATUS'}
          </span>
        </div>
      )}

      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
