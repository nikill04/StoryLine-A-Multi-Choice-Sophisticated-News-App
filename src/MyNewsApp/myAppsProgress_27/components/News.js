import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("Hello I am a constructor form News component")
        this.state = {
            articles: [],
            loading: false
        }
    }

    // 'componentDidMount' always executes after 'render()' gets executed
    async componentDidMount() {
        console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ca3c90f1bfb44990a5d20bc11aaeeef1"

        // For better clarity of 'async', 'await', 'API's' and 'fetch()', 
        // click ==> https://chatgpt.com/share/6726314f-59e4-800d-9b3c-c2042e7e44eb
        
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles})
    }

    render() {
        console.log("hi there")
        return (
            <div className="container my-3">
                <h1>NesMonkey - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    }))}
                </div>
            </div>
        )
    }
}

export default News
