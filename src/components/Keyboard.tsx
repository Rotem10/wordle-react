// import React, { useContext } from 'react';
// import { appContext } from '../providers/appContext';
import { useSelector, useDispatch } from 'react-redux';
import { change } from '../store/letterValueSlice';

// type SetTile = React.Dispatch<React.SetStateAction<number>>;
// type SetValue = React.Dispatch<React.SetStateAction<string>>;
// type UseApp = {
//   currentTile: number;
//   setCurrentTile: SetTile;
//   currentValue: string;
//   setCurrentValue: SetValue;
// };
export function Keyboard(): JSX.Element {
  // const { currentTile, setCurrentTile, setCurrentValue }: UseApp =
  //   useContext(appContext);

  const dispatch = useDispatch();

  const firstRowKeys: string[] = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
  ];
  const secondRowKeys: string[] = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const thirdRowKeys: string[] = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  const handlekeyClicked = (event: MouseEventHandler<HTMLButtonElement>) => {
    // setCurrentValue(event.target.id.toUpperCase());
    // setCurrentTile(currentTile + 1);
    dispatch(change(event.target.id.toUpperCase()));
  };

  function createRow(keys: string[]): JSX.Element[] {
    return keys.map(
      (key: string, index): JSX.Element => (
        <div className={'key_' + key} key={index}>
          <button id={key} onClick={handlekeyClicked}>
            {key.toUpperCase()}
          </button>
        </div>
      )
    );
  }

  return (
    <div className='keyboard'>
      <div className='key_row_1'>{createRow(firstRowKeys)}</div>

      <div className='key_row_2'>
        <div className='spacer'></div>
        {createRow(secondRowKeys)}
        <div className='spacer'></div>
      </div>

      <div className='key_row_3'>
        <div className='key_enter'>
          <button>ENTER</button>
        </div>
        {createRow(thirdRowKeys)}
        <div className='key_del'>
          <button>
            <img src='https://img.icons8.com/ios/50/null/clear-symbol--v1.png' />
          </button>
        </div>
      </div>
    </div>
  );
}
