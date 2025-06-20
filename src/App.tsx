import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://geekfanaticos.fbitsstatic.net/img/p/batmobile-batmovel-the-batman-2022-escala-1-18-jada-toys-74817/261305.jpg?w=540&h=540&v=202501231555&qs=ignore">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
