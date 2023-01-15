import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from '../store/userSlice';
import { RootState } from '../store/store';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export function UserFormModal(): JSX.Element {
  const userName = useSelector((state: RootState) => state.user.userName);
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const inputRef: React.MutableRefObject<null> = useRef(null);
  const handleSignUp = () => {
    let inputUserName: String = '';
    if (inputRef.current) {
      inputUserName = inputRef.current.value;
      dispatch(signIn(inputUserName));
      inputRef.current.value = '';
    } else {
      dispatch(signOut());
    }
  };

  return (
    <div
      className='modal fade'
      id='staticBackdropUser'
      data-bs-backdrop='static'
      data-bs-keyboard='true'
      tabIndex={-1}
      aria-labelledby='staticBackdropLabelUser'
      aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='staticBackdropLabelUser'>
              {`You're currently signed in as ${userName ? userName : 'Guest'}`}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>

          {userName ? null : (
            <div className='modal-body'>
              <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon1'>
                  User Name
                </span>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                  ref={inputRef}
                />
              </div>
            </div>
          )}

          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={handleSignUp}>
              {userName ? 'Sign Out' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
