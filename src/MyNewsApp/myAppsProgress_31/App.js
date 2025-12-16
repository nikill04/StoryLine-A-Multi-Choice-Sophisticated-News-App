import '../../App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export default class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Routes>
                    <Route path="/" element={<News key="general" pageSize={6} country="us" category="general" />} />
                        <Route path="/business" element={<News key="business" pageSize={6} country="us" category="business" />} />
                        <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country="us" category="entertainment" />} />
                        <Route path="/general" element={<News key="general-category" pageSize={6} country="us" category="general" />} />
                        <Route path="/health" element={<News key="health" pageSize={6} country="us" category="health" />} />
                        <Route path="/science" element={<News key="science" pageSize={6} country="us" category="science" />} />
                        <Route path="/sports" element={<News key="sports" pageSize={6} country="us" category="sports" />} />
                        <Route path="/technology" element={<News key="technology" pageSize={6} country="us" category="technology" />} />

                        {/* In React Router v6, components don’t remount by default when navigating to a different route that renders the same component. This is because React reuses the component if the route path only changes in terms of parameters (or other minor details). To force the News component to remount when navigating to a different category, you can provide a unique key for each route based on its category prop. */}
                    </Routes>
                </Router>
            </div>
        )
    }
}