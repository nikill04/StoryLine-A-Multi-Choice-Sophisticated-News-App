import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("Hello I am a constructor form News component")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    // 'componentDidMount' always executes after 'render()' gets executed
    async componentDidMount() {
        console.log("cdm")
        // let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ca3c90f1bfb44990a5d20bc11aaeeef1"  ==> This is original out API link
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ca3c90f1bfb44990a5d20bc11aaeeef1&page=1&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePrevClick = async () => {
        console.log("Previous")

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ca3c90f1bfb44990a5d20bc11aaeeef1&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        console.log("Next")

        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        //     // document.querySelector(".btn-dark[onClick='this.handleNextClick']").disabled = true; ==> not working properly, that's why here we disabled it in the button itself
        // }
        // else {
        //     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ca3c90f1bfb44990a5d20bc11aaeeef1&page=${this.state.page + 1}&pageSize=20`
        //     let data = await fetch(url)
        //     let parsedData = await data.json()
        //     console.log(parsedData);

        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles
        //     })
        // }

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ca3c90f1bfb44990a5d20bc11aaeeef1&page=${this.state.page + 1}&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
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
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News