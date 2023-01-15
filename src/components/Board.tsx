import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextId } from '../store/tileSlice';
import { changeValue } from '../store/letterValueSlice';
import { compareValues } from '../store/wordSlice';
import { RootState } from '../store/store';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type InputRefs = React.MutableRefObject<HTMLInputElement[]>;
enum ValuesCompare {
  None = '',
  Green = 'green',
  Yellow = 'yellow',
  Grey = 'grey',
}

export function Board(): JSX.Element {
  const currentTile: number = useSelector(
    (state: RootState) => state.currentTile.id
  );
  let currentValue: string = useSelector(
    (state: RootState) => state.currentValue.value
  );
  const compares: ValuesCompare[] = useSelector(
    (state: RootState) => state.word.compares
  );
  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect(() => {
    tileInputRefs.current[currentTile].focus();
  }, [currentTile]);

  useEffect(() => {
    if (currentValue) {
      const wordIndex: number = convertTileIndexToWordIndex();
      currentValue = currentValue.toLowerCase();
      dispatch(compareValues({ currentValue, wordIndex, currentTile }));

      tileInputRefs.current[currentTile].value = currentValue.toUpperCase();
      dispatch(nextId());

      if (isLastTileInRow()) {
        alert('done');
      }
    }
  }, [currentValue]);

  useEffect(() => {
    if (currentTile > 0) {
      tileInputRefs.current[currentTile - 1].classList.add(
        compares[currentTile - 1]
      );
    }
  }, [compares]);

  const tiles: string[] = Array(30).fill('tile_');
  const tileInputRefs: InputRefs = useRef([]);
  tileInputRefs.current = [];

  const addToRefs = (tileInput: HTMLInputElement): void => {
    if (tileInput && !tileInputRefs.current.includes(tileInput)) {
      tileInputRefs.current.push(tileInput);
    }
  };

  const handleInputChange = (event: InputEvent) => {
    const value = event.target.value.toLowerCase();
    const alphaOnlyPattern: RegExp = new RegExp('^[a-zA-Z]+$');
    if (alphaOnlyPattern.test(event.target.value)) {
      dispatch(changeValue(value));
    } else {
      event.target.value = '';
    }
  };

  const convertTileIndexToWordIndex = (): number => {
    const index_0 = [0, 5, 10, 15, 20, 25];
    const index_1 = [1, 6, 11, 16, 21, 26];
    const index_2 = [2, 7, 12, 17, 22, 27];
    const index_3 = [3, 8, 13, 18, 23, 28];
    const index_4 = [4, 9, 14, 19, 24, 29];
    switch (true) {
      case index_0.includes(currentTile):
        return 0;
      case index_1.includes(currentTile):
        return 1;
      case index_2.includes(currentTile):
        return 2;
      case index_3.includes(currentTile):
        return 3;
      case index_4.includes(currentTile):
        return 4;
      default:
        return -1;
    }
  };

  const isLastTileInRow = (): boolean => {
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
