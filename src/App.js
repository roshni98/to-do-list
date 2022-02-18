import './App.css';
import ToDoListUI from './toDoListUI';

function App() {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <div className="underline"></div>
          <ToDoListUI></ToDoListUI>
        </div>
      </section>
    </main>
  );
}
export default App;
