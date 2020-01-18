import React from 'react';
import { observer, inject } from "mobx-react";
import Header from './header/Header';
import Footer from './footer/Footer';
import PreviewBlock from './preview_block/PreviewBlock';
import 'bootstrap/dist/css/bootstrap.min.css';

@inject("mainStore")
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const mainStore = this.props.mainStore;
    return (
      <div className="App">
          <Header />
          <main>
            <PreviewBlock />
          </main>
          <Footer />
      </div>
    );
  }
}

export default App;