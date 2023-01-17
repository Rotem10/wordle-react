import { useDispatch } from 'react-redux';
import { changeValue } from '../store/letterValueSlice';

export function Keyboard(): JSX.Element {
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

  const handlekeyClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(changeValue((event.target as Element).id));
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
