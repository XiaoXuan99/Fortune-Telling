import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetFortune = class extends React.Component {
  render() {
    const {parent, playable, fortune} = this.props;
    return (
      <div>
        {fortune ? 'Fortune was rejected! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        Select the fortune:
        <br/><br/>
        <div className = 'buttonContainer'>
          <button
            disabled={!playable}
            onClick={() => parent.playFortune(50)}
          >50</button>
          <button
            disabled={!playable}
            onClick={() => parent.playFortune(100)}
          >100</button>
          <button
            disabled={!playable}
            onClick={() => parent.playFortune(150)}
          >150</button>
        </div>
      </div>
    );
  }
}

exports.GetDecision = class extends React.Component {
  render() {
    const {parent, playable, fortune, decision} = this.props;
    return (
      <div>
        {!fortune ? 'New fortune was selected! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        {playable ? `The fortune selected is ${fortune}. Do you want to accept the fortune?` : ''}
        <br/><br/>
        <div className='buttonContainer'>
          <button
            disabled={!playable}
            onClick={() => parent.playDecision(true)}
          >Yes</button>
          <button
            disabled={!playable}
            onClick={() => parent.playDecision(false)}
          >No</button>
        </div>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {decision, fortune} = this.props;
    return (
      <div>
        {decision ? `The fortune of ${fortune} is accepted.\n Thank you for playing.` :
        `The fortune is rejected. Waiting another player to select new fortune...`}
        <br />
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;