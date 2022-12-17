import { useState } from 'react';

type SetTile = React.Dispatch<React.SetStateAction<number>>;
type SetValue = React.Dispatch<React.SetStateAction<string>>;
type UseApp = {
  currentTile: number;
  setCurrentTile: SetTile;
  currentValue: string;
  setCurrentValue: SetValue;
};

export function useAppState(): UseApp {
  const [currentTile, setCurrentTile]: [number, SetTile] = useState(0);
  const [currentValue, setCurrentValue]: [string, SetValue] = useState('');
  return { currentTile, setCurrentTile, currentValue, setCurrentValue };
}
