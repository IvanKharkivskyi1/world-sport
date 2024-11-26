// pages/_app.js
import { Provider } from 'react-redux';
import { store } from '@/app/store/store'; // Імпортуємо ваш store

function MyApp({ Component, pageProps }) {
    return (
      <Provider store={store}> {/* Обгортаємо весь додаток в Provider */}
        <Component {...pageProps} />
      </Provider>
    );
  }
  
  export default MyApp;
