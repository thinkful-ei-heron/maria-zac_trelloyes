import React, { Component } from 'react';

class AppClass extends React.Component {
  static defaultProps = {store: {lists:[], allCards: {} } }
};

function Card(props) {
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

function List(props) {
  const arr = props.cards.map((card) => <Card
    key={card.id}
    title={card.title}
    content={card.content}
    />
)
  return (
    <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
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
