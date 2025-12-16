import '../../App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar"

export default class App extends Component {
    pageSize = 6;
    
    state = {
        progress: 0
    }
    setProgress = (progress) => {
        this.setState({progress: progress})
    }

    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <LoadingBar
                    height={3}
                    color = '#f11946'
                    progress={this.state.progress}
                    />
                    <Routes>
                        <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
                        <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business" />} />
                        <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
                        <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health" />} />
                        <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science" />} />
                        <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
                        <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />

                        {/* In React Router v6, components don’t remount by default when navigating to a different route that renders the same component. This is because React reuses the component if the route path only changes in terms of parameters (or other minor details). To force the News component to remount when navigating to a different category, you can provide a unique key for each route based on its category prop. */}
                    </Routes>
                </Router>
            </div>
        )
    }
}