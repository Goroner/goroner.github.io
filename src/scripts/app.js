import React from 'react';
import { render } from 'react-dom';
import Spinner from './components/common/spinner';
import Search from './components/page/search';
import Author from './components/page/author';
import Footer from './components/page/footer';
import Contact from './components/page/contact';
import Columns from './components/containers/columns';
import itemStore from './stores/impl/item';

class App extends React.Component {
    render() {
        var main;

        if (this.state) {
            main = <Columns single="true">{this.state.items}</Columns>;
        } else {
            main = <Spinner />;
        }

        return (
            <div id="app">
                <div className="global-search">
                    <Search />
                </div>
                <div className="page">
                    <div className="page__left">
                        <aside>
                            <Author />
                        </aside>
                    </div>
                    <div className="page__right">
                        <main>{main}</main>
                    </div>
                </div>
                <footer id="footer">
                    <Footer />
                </footer>
                <Contact />
            </div>
        );
    }

    componentDidMount() {
        itemStore.addChangeListener(this._onItemStoreChange.bind(this));
    }

    componentWillUnmount() {
        itemStore.removeChangeListener(this._onItemStoreChange);
    }

    _onItemStoreChange() {
        this.setState({
            items: itemStore.getItems()
        });
    }
}

render(<App />, document.getElementById('app'));