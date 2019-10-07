import React from 'react';

class AppClass extends React.Component {
  static defaultProps = {store: {lists:[], allCards: {} } }
  render() {return;};
}

function Card(props) {
  console.log(props);
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

function List(props) {
  console.log(props);
  const arr = [];
  for (let i = 0; i < props.cards.length; i++) {
    arr.push(<Card
      key={props.cards.id}
      title={props.cards.title}
      content={props.cards.content} />);
  };
  return (
    <section className="List">
        <header className="List-header">
          <h2>First list</h2>
        </header>
        <div className="List-cards">
            {arr}
            <button type="button" className="List-add-button">
              + Add Random Card
            </button>
        </div>
      </section>
  )
}

function App(props) {
  const lists = props.store.STORE.lists;
  let arr = [];
  let cards = [];
  for (let i = 0; i < lists.length; i++) {
    cards = lists[i].cardIds.map(input => {
      return props.store.STORE.allCards[input];
    },);
    arr.push(
      <div className="App-list">
      <List key={lists[i].id} header={lists[i].header} cards={cards} />
      </div>
    );
    cards = [];
  };
  
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      {arr}
    </main>
  );
}

export default App;
