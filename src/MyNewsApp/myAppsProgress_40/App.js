import '../../App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar"

const App = () => {
    const pageSize = 6;
    const apiKey = process.env.REACT_APP_NEWS_API

    const [progress, setProgress] = useState(0)

    return (
        <div>
            <Router>
                <NavBar />
                <LoadingBar
                    height={3}
                    color='#f11946'
                    progress={progress}
                />
                <Routes>
                    <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
                    <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
                    <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
                    <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
                    <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
                    <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
                    <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />

                    {/* In React Router v6, components don’t remount by default when navigating to a different route that renders the same component. This is because React reuses the component if the route path only changes in terms of parameters (or other minor details). To force the News component to remount when navigating to a different category, you can provide a unique key for each route based on its category prop. */}
                </Routes>
            </Router>
        </div>
    )
}

export default App;