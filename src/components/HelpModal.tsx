export function HelpModal(): JSX.Element {
  return (
    <div
      className='modal fade'
      id='staticBackdropHelp'
      data-bs-backdrop='static'
      data-bs-keyboard='true'
      tabIndex={-1}
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='staticBackdropLabel'>
              How To Play
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body text-start'>
            <p className='text-center'>Guess the Wordle in 6 tries</p>
            <ul>
              <li>Each guess must be a valid 5-letter word.</li>
              <li>
                The color of the tiles will change to show how close your guess
                was to the word:
              </li>
              <ul>
                <li>
                  Green tile - the letter is in the word and in the correct
                  spot.
                </li>
                <li>
                  Yellow tile - the letter is in the word but in the wrong spot.
                </li>
                <li>Grey tile - the letter is not in the word in any spot.</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
