import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";


const Profile = () => {
  return (
    <div className="row">
      <h2>Это стр с профилем</h2>
    </div>
  );
};

const Love = () => {
  return <h2>Это стр со знакомствами</h2>;
};

const Music = () => {
  return <h2>Это стр с музыкой</h2>;
};

const Messages = () => {
  return <h2>Это стр с сообщениями</h2>;
};

const Settings = () => {
  return <h2>Это стр с настройками</h2>;
};

const Friends = () => {
  return <h2>Это стр с друзьями</h2>;
};

const Exit = () => {
  return <h2>Это выход</h2>;
};


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            aria-orientation="vertical"
          >
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="love">
              Симпатий
            </NavLink>
            <NavLink className="nav-link" to="music">
              Музыка
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
            <NavLink className="nav-link" to="friends">
              Друзья
            </NavLink>
            <NavLink className="nav-link" to="exit">
              Выход
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/love" element={<Love />} />
            <Route path="/music" element={<Music />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/exit" element={<Exit />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
