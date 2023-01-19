import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextId, checkLastTileInRow } from '../store/tileSlice';
import {
  changeValue,
  setValueChanged,
  setGameOver,
} from '../store/letterValueSlice';
import { compareValues, updateUserWord, checkRow } from '../store/wordSlice';
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
  const values: string[] = useSelector(
    (state: RootState) => state.currentValue.values
  );
  const compares: ValuesCompare[] = useSelector(
    (state: RootState) => state.word.compares
  );

  const isSuccess: boolean = useSelector(
    (state: RootState) => state.word.isSuccess
  );

  const isLastTileInRow: boolean = useSelector(
    (state: RootState) => state.currentTile.isLastTileInRow
  );

  const valueChanged: boolean = useSelector(
    (state: RootState) => state.currentValue.valueChanged
  );

  const game: boolean = useSelector(
    (state: RootState) => state.currentValue.game
  );

  const firstRenderRef = useRef(true);

  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect(() => {
    tileInputRefs.current[currentTile].focus();
    dispatch(checkLastTileInRow(true));
  }, [currentTile]);

  useEffect(() => {
    if (currentValue && valueChanged) {
      const wordIndex: number = convertTileIndexToWordIndex();
      currentValue = currentValue.toLowerCase();
      dispatch(compareValues({ currentValue, wordIndex, currentTile }));

      tileInputRefs.current[currentTile].value = currentValue.toUpperCase();

      dispatch(updateUserWord(currentValue));

      dispatch(checkRow());

      dispatch(nextId());

      dispatch(setValueChanged());

      if (currentTile === 29) {
        alert('Game Over');
        dispatch(setGameOver());
      }
    }
  }, [currentValue]);

  useEffect(() => {
    if (isLastTileInRow && firstRenderRef) {
      if (!isSuccess) {
        alert('end of row');
      }
      dispatch(checkLastTileInRow(false));
      firstRenderRef.current = false;
    }
  }, [isLastTileInRow]);

  useEffect(() => {
    if (isSuccess) {
      alert('Win');
      dispatch(setGameOver());
    }
  }, [isSuccess]);

  useEffect(() => {
    if (currentTile && firstRenderRef && game) {
      tileInputRefs.current[currentTile - 1].classList.add(
        compares[currentTile - 1]
      );
      const keyButton: HTMLElement | null = document.getElementById(
        `${currentValue.toLowerCase()}`
      );
      if (keyButton?.classList[0]) {
        keyButton?.classList.remove(keyButton?.classList[0]);
      }
      keyButton?.classList.add(compares[currentTile - 1]);
    }
  }, [compares]);

  const tileInputRefs: InputRefs = useRef([]);
  tileInputRefs.current = [];

  const addToRefs = (tileInput: HTMLInputElement): void => {
    if (tileInput && !tileInputRefs.current.includes(tileInput)) {
      tileInputRefs.current.push(tileInput);
    }
  };

  const handleInputChange = (event: InputEvent) => {
    if (game) {
      const value = event.target.value.toLowerCase();
      const alphaOnlyPattern: RegExp = new RegExp('^[a-zA-Z]+$');
      if (alphaOnlyPattern.test(event.target.value)) {
        dispatch(changeValue(value));
      } else {
        event.target.value = '';
      }
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

  return (
    <div className='board'>
      {values.map(
        (value: string, index: number): JSX.Element => (
          <div className={`tile_${index}`} key={index}>
            <input
              type='text'
              maxLength={1}
              ref={addToRefs}
              onChange={handleInputChange}
              value={value.toUpperCase()}
              className={compares[index]}
            />
          </div>
        )
      )}
    </div>
  );
}
