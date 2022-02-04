import React, { useState } from 'react';
import ReactPlayer from "react-player"
import { clues, defaultClueId, finalClueId } from './clues';

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
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [hideClue, setHideClue] = useState(true);

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

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (activeClue === null) {
      return;
    }

    const isCorrectAnswer = activeClue.testAnswer(answer.trim().toLowerCase())

    if (isCorrectAnswer) {
      setSuccess(true);
      
      await new Promise((resolve) => setTimeout(resolve, 200));

      setSuccess(false);
      setAnswer('');
      setError(false);
      setHideClue(true);
      setClueId(activeClue.nextClue);
      updateQuery(CLUE_ID_QUERY_PARAM, activeClue.nextClue);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (error === false) {
      setError(true);
    }
  }

  return (
    <div className="container">
      <section className="section">
        {activeClue !== null && activeClue.videoId.length > 0 ? (
          <ReactPlayer
            width='100%'
            height='auto'
            url={`https://www.youtube.com/watch?v=${activeClue.videoId}`}
          />
        ) : null}
      </section>

      {activeClue !== null && activeClue.question.length > 0 ? (
        <section className="section">
          <div className="container">
            <div className="card">
              <button onClick={() => setHideClue(!hideClue)} className="card-header" style={{ width: '100%', border: 0 }}>
                <p className="card-header-title">{hideClue ? 'Show' : 'Hide'} Clue</p>
              </button>

              <div className={`card-content${hideClue ? ' is-hidden' : ''}`}>
                <div className="content">
                  <pre>{activeClue.question}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {activeClue !== null && activeClue.clueId !== finalClueId ? (
        <section className="section">
          <form onSubmit={onSubmitForm}>
            <div className="field">
              <div className="control">
                <input
                  type="text"
                  name="answer"
                  placeholder="Answer..."
                  className={`input is-large${error ? ' is-danger' : ''}${success ? ' is-primary' : ''}`}
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
      ) : (
        <section className="section">
          THE END.
        </section>
      )}
    </div>
  );
}

export default App;
