import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAhPlUCJLxGNidT2Ja1hLvKi0wi3KmgFEM';


// create a new component. this component should produce some HTML
class App extends Component {
    constructor(props) {
        // constructor always gets called with props
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            // in ES6, when the key and var are the same name, we can simply type it as the line above
            // i.e. the line above is equivalent to this.setState({ videos: videos })
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));