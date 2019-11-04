import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MemosPage, MemoPage, EditPage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MemosPage} />
      <Route path="/memo/:memoId?" component={MemoPage} />
      <Route path="/edit" component={EditPage} />
    </Switch>
  );
};

export default App;
