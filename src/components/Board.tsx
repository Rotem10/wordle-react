import { useEffect, useRef } from 'react';
// import { appContext } from '../providers/appContext';
import { useSelector, useDispatch } from 'react-redux';
import { nextId } from '../store/tileSlice';
import { change } from '../store/letterValueSlice';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type InputRefs = React.MutableRefObject<HTMLInputElement[]>;
// type SetTile = React.Dispatch<React.SetStateAction<number>>;
// type SetValue = React.Dispatch<React.SetStateAction<string>>;
// type UseApp = {
//   currentTile: number;
//   setCurrentTile: SetTile;
//   currentValue: string;
//   setCurrentValue: SetValue;
// };

export function Board(): JSX.Element {
  // const { currentTile, setCurrentTile, currentValue, setCurrentValue }: UseApp =
  //   useContext(appContext);

  const currentTile = useSelector((state) => state.currentTile.id);
  const currentValue = useSelector((state) => state.currentValue.value);
  const dispatch = useDispatch();

  useEffect(() => {
    tileInputRefs.current[currentTile].focus();
  }, [currentTile]);

  useEffect(() => {
    if (currentValue) {
      tileInputRefs.current[currentTile].value = currentValue;
      dispatch(nextId());
      if (isLastTileInRow()) {
        alert('done');
      }
    }
  }, [currentValue]);

  const tiles: string[] = Array(30).fill('tile_');
  const tileInputRefs: InputRefs = useRef([]);
  tileInputRefs.current = [];

  const addToRefs = (tileInput: HTMLInputElement): void => {
    if (tileInput && !tileInputRefs.current.includes(tileInput)) {
      tileInputRefs.current.push(tileInput);
    }
  };

  const handleInputChange = (event: InputEvent) => {
    // event.target.value = event.target.value.toUpperCase();
    // setCurrentTile(currentTile + 1);

    const alphaOnlyPattern: RegExp = new RegExp('^[a-zA-Z ]+$');

    if (alphaOnlyPattern.test(event.target.value)) {
      dispatch(change(event.target.value.toUpperCase()));
    } else {
      event.target.value = '';
    }
  };
  //   parseInt(event.target.id)
  //   id={index.toString()}

  const isLastTileInRow = () => {
    return (
      currentTile === 4 ||
      currentTile === 9 ||
      currentTile === 14 ||
      currentTile === 19 ||
      currentTile === 24 ||
      currentTile === 29
    );
  };

  return (
    <div className='board'>
      {tiles.map(
        (tile: string, index: number): JSX.Element => (
          <div className={tile + index} key={index}>
            <input
              type='text'
              maxLength={1}
              ref={addToRefs}
              onChange={handleInputChange}
            />
          </div>
        )
      )}
    </div>
  );
}
