import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    // For using deafualt Props and prop Types we generally use 'static' before them in class based components.
    static defaultProps = {
        country: 'us',
        pageSize: 5,
        category: "general"
    }

    // ca3c90f1bfb44990a5d20bc11aaeeef1
    // ca3c90f1bfb44990a5d20bc11aaeeef1
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,  
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews() {
        this.props.setProgress(10)
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json()
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }

    // 'componentDidMount' always executes after 'render()' gets executed
    async componentDidMount() {
        this.updateNews()
    }

    fetchMoreData = async () => {
        const nextPage = this.state.page + 1
        this.setState({ page: nextPage })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    }

    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: "35px 0px" }} >NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    next={this.fetchMoreData}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element => {
                                if (!element) return null; // Check if element is undefined
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            }))}
                        </div>
                    </div>
                </InfiniteScroll>

                {/* When the number of articles (this.state.articles.length) equals the total number of results available (this.state.totalResults), 'hasMore' is set to false, indicating that there’s no more content to load. This stops the infinite scroll. */}
                {/* 'next' is a function that the InfiniteScroll component calls when the user reaches the bottom of the list. */}
                {/* When the end is reached and 'hasMore' is still true (indicating that more articles are available), InfiniteScroll triggers the next function. While fetchMoreData is in progress, InfiniteScroll automatically displays the loader component (the <Spinner />). */}
            </>
        )
    }
}

export default News