import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { BoardProvider } from './contexts/BoardContext';
import { EditorProvider } from './contexts/EditorContext';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <BoardProvider>
      <EditorProvider>
        <App />
      </EditorProvider>
    </BoardProvider>
  </StrictMode>,
  document.getElementById('root')
);
