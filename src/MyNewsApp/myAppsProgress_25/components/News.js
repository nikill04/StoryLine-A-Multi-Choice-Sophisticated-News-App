import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Yashraj Sharma",
            "title": "US election: Why is Kamala Harris losing Indian American voters?",
            "description": "She could become the Indian American president. So why is she bleeding votes – to Trump’s advantage?",
            "url": "https://www.aljazeera.com/news/2024/11/1/us-election-why-is-kamala-harris-losing-indian-american-voters",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/AP24136796966617-1730432181.jpg?resize=1920%2C1440",
            "publishedAt": "2024-11-01T04:17:48Z",
            "content": "Democratic presidential candidate Kamala Harris is projected to lose a segment of her partys traditional share of Indian American voters who have historically sided with the Democrats in the 2024 Uni… [+10506 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "1 arrested, 1 at large following shooting into B.C. home of Punjabi musician AP Dhillon | CBC News",
            "description": "Gunshots were fired into the Vancouver Island home of popular Punjabi singer and music producer AP Dhillon in September. Now, RCMP say they have arrested one man and issued a warrant for another believed to be in India.",
            "url": "http://www.cbc.ca/news/canada/british-columbia/ap-dhillon-bc-shooting-arrests-1.7370319",
            "urlToImage": "https://i.cbc.ca/1.6777817.1725394632!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/ap-dhillon.JPG",
            "publishedAt": "2024-11-01T00:22:14.7464212Z",
            "content": "Police say they have arrested one man and are searching for another as part of their investigation into a shooting at the Vancouver Island home of popular singer and music producer AP Dhillon earlier… [+3197 chars]"
        },
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "The Times of India",
            "title": "Fear of Waqf taking over houses sets off violence in Karnataka village - The Times of India",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNM0hDN2dZb2Z3R1MxV0pqek1WeTEzTWdNYVEwSE1jbVBwc0lyQ3c3WlBfbHdSRVI1Skhwdm1NbHVILVRKdGpBY1RIMXR6N0RnTWR0cjlIT3l6cms3czJpMExuTUpCZ0RnOFd4VkdUNGo1bUJ2YzJWcFBkSWljaW95Qzl3SlczWVIwQVhqcWhGa002NGluQ3hzVWlWTUxmTHhoNkhhd1FVemV1UjNUYV9FUVVNd0d3RVBOSWF6dmZpa0VGWWZNVnEwYlJYdzFRVGZJWWR5Rw?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-10-31T23:29:00+00:00",
            "content": null
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "IPL retentions 2025: Jos Buttler, Mitchell Starc & Rishabh Pant not retained before Mega Auction",
            "description": "England white-ball captain Jos Buttler is among the players who have not been retained for the 2025 Indian Premier League season.",
            "url": "http://www.bbc.co.uk/sport/cricket/articles/c86q3zxnnj0o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/d448/live/6a1aae40-9786-11ef-b1d2-8fca24077ba5.jpg",
            "publishedAt": "2024-10-31T19:07:24.796716Z",
            "content": "Chennai Super Kings: Ruturaj Gaikwad, Matheesha Pathirana, Shivam Dube, Ravindra Jadeja, MS Dhoni.\r\nDelhi Capitals: Axar Patel, Kuldeep Yadav, Tristan Stubbs, Abishek Porel.\r\nGujarat Titans: Rashid K… [+700 chars]"
        },
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "The Tribune India",
            "title": "Indian, Chinese troops exchange sweets at several border points on Diwali - The Tribune India",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNdXVYYXV2akR2RDZUT2ctX2ZQc2h2TnI3b292SW1Jc3pybzl1S25wbnFCdnM4RzN3UjdxWmFnTlY1VXVNSkJwdC1ZSklJYldGWnpKdUhuZDFWa0tia1hKV3ItN2FGNWktRVpidXc4aU56dTNrQmxsU0dpNVNNcWlTRHF0RjBsRFktQnd4Nm5XMFhyWlJGX1JyaFgxQzVOSzdtbXd3TkcxZmh6QUhBeS01RmlDb3ZNNk1tQTUyOXlsdWg?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-10-31T06:47:58+00:00",
            "content": null
        },
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "Deccan Herald",
            "title": "Forces outside and inside working to destabilise India: Modi amid Canada tensions - Deccan Herald",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPM3hEOC1Ob3JEX2ZKZmFFU3RmWkEwQkw4NVRyaEhQWWpKMHp5TzNYZ1RlT202eFRlbXZNSFpqVEhwU3VncWFEUzJFRFBrWS02ZlhFMnBjZEk1QldkMmtMbjMyTEJJbUJqSndVQVFOQy1MaWZDTDZZanpCQXFOUmNjSkpadm5TV0JuZ0xLdHZuRHgyU0Zab0FoVlUxd21JT3otYmJqY3dRbnJmZmRwWWdtdkxCVExqbmZJNm5EbWI1V2tlMmtzZkc0M1Q0WQ?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-10-31T04:47:29+00:00",
            "content": null
        }]

    constructor() {
        super();
        console.log("Hello I am a constructor form News component")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NesMonkey - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydescription" imageUrl="https://www.aljazeera.com/wp-content/uploads/2024/11/AP24136796966617-1730432181.jpg?resize=1920%2C1440" newsUrl="TODO" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydescription" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydescription" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
