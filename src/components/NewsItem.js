import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card zoom">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{ left: '50%', zIndex: '1' }}> {source}
                    </span>
                    <img src={!imageUrl ? "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.kribhco.net%2Fassets%2Fimg%2Fnews%2Fnews.jpg&imgrefurl=https%3A%2F%2Fwww.kribhco.net%2Fnews.html&tbnid=6ACk-eoAMFuXoM&vet=12ahUKEwi3yavQgLL5AhW-_TgGHQE0CRsQMygUegUIARDxAQ..i&docid=XfRmfKTfoD0-aM&w=750&h=308&q=news%20img&ved=2ahUKEwi3yavQgLL5AhW-_TgGHQE0CRsQMygUegUIARDxAQ" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem