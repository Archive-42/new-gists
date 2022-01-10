import React, { Fragment, useState } from 'react';
import store from './store';

const App = () => {

  let [ identity ] = store.paths(['id', 'version']).link(useState());
  let [ usersCount ] = store.paths('users.length').link(useState());
  let [ openTabs ] = store.paths('openTabs').link(useState());
  let [ settings, unlink ] = store.paths({
    devTools: 'settings.DevTools',
    history: 'settings.History'
  }).link(useState());

  useEffect(() => unlink, []);

  return (
    <code>
      Id: { identity[0] }
      Version: { identity[0] }
      openTabs: { openTabs }
      UsersCount: { usersCount }
      DevToolsEnabled: { settings.devTools }
      HistoryEnabled: { settings.history }
    </code>
  );
}

export default App;