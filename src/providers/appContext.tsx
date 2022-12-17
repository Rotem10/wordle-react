import { createContext } from 'react';
type SetTile = React.Dispatch<React.SetStateAction<number>>;
type UseApp = { currentTile: number; setCurrentTile: SetTile };

export const appContext: React.Context<null> | React.Context<UseApp> =
  createContext(null);
