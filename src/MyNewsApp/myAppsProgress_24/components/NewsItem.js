import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://www.aljazeera.com/wp-content/uploads/2024/11/AP24136796966617-1730432181.jpg?resize=1920%2C1440" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem