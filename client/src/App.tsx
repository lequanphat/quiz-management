import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import { useFetchUser } from './hooks/UseFetchUser';
function App() {
  useFetchUser();
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
