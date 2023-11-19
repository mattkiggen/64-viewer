import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>hello from react</h1>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
