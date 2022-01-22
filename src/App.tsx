import React, { useState } from 'react';
import ReactPlayer from "react-player"
import { clues, defaultClueId } from './clues';

import 'bulma/css/bulma.min.css';

const CLUE_ID_QUERY_PARAM = 'clue-id';

function getQuery() {
  return new URLSearchParams(window.location.search);
}

function getKey(key: string, defaultVal: string) {
  return getQuery().get(key) || defaultVal;
}

function updateQuery(key: string, val: string) {
  const query = getQuery();
  query.set(key, val);
  const { protocol, pathname, host } = window.location;
  const newUrl = `${protocol}//${host}${pathname}?${query.toString()}`;
  window.history.pushState({}, '', newUrl);
}

function App() {
  const [clueId, setClueId] = useState(getKey(CLUE_ID_QUERY_PARAM, defaultClueId));
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);

  const activeClue = (typeof clueId === 'string' ? clues[clueId] : null) ?? null;

  window.onpopstate = function() {
    setClueId(getKey(CLUE_ID_QUERY_PARAM, defaultClueId));
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);

    if (error) {
      setError(false);
    }
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (activeClue === null) {
      return;
    }

    const isCorrectAnswer = activeClue.testAnswer(answer)

    if (isCorrectAnswer) {
      setAnswer('');

      if (error) {
        setError(false);
      }

      setClueId(activeClue.nextClue);
      updateQuery(CLUE_ID_QUERY_PARAM, activeClue.nextClue);
    } else if (error === false) {
      setError(true);
    }
  }

  return (
    <div className="container">
      <section className="section">
        {activeClue !== null ? (
          <ReactPlayer
            width='100%'
            height='auto'
            url={`https://www.youtube.com/watch?v=${activeClue.videoId}`}
          />
        ) : (
          <div><p>Nothing to see here</p></div>
        )}
      </section>

      <section className="section">
      <form onSubmit={onSubmitForm}>
        <div className="field">
          <div className="control">
            <input
              type="text"
              name="answer"
              placeholder="Answer..."
              className={`input is-large${error ? ' is-danger' : ''}`}
              value={answer}
              onChange={onChangeInput}
            />
          </div>
          {error ? <p className="help is-danger">That answer is incorrect</p> : null}
        </div>

        <div className="field">
          <div className="control">
            <input
              type="submit"
              value="Submit"
              className={`button is-primary is-large${error ? ' disabled' : ''}`}
            />
          </div>
        </div>
      </form>
      </section>
    </div>
  );
}

export default App;
