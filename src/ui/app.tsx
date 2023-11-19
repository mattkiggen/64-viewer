import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './app.css';
import MainPage from './MainPage';

const App = () => {
  return (
    <Theme
      accentColor='cyan'
      grayColor='gray'
      panelBackground='solid'
      scaling='100%'
      radius='large'>
      <MainPage />
    </Theme>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
