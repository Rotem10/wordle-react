import { useSelector, useDispatch } from 'react-redux';

export function Welcome(): JSX.Element {
  const userName = useSelector((state) => state.user.userName).toUpperCase();
  return (
    <div className='welcome'>
      <h1>WELCOME {userName ? userName : 'GUEST'}</h1>
    </div>
  );
}
