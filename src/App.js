import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './state/Store';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';
import PreviewMnemonic from './components/Preview/PreviewMnemonic';
import Controls from './components/Controls/Controls';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            store: Store,
        };
    }

    render() {
        return ([
            <Provider key="provider" store={this.state.store}>
                <div className="container">
                    <Header />
                    <Preview />
                    <PreviewMnemonic />
                    <Controls />
                </div>
            </Provider>,
            <Footer key="footer" />,
        ]);
    }
}

export default App;
