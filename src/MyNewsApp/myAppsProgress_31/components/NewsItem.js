import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl ? "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/11/01/PNAS/75999606007-2166917000.jpg?crop=3334,1876,x0,y500&width=3200&height=1801&format=pjpg&auto=webp" : imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem