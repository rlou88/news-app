import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null,
  };

  getArticles() {
    var url =
      'http://newsapi.org/v2/top-headlines?' +
      'country=in&' +
      'apiKey=' +
      process.env.REACT_APP_KEY;
    axios
      .get(url)
      .then((response) =>
        response.data.articles.map((article) => ({
          description: `${article.description}`,
          title: `${article.title}`,
          url: `${article.url}`,
          img: `${article.urlToImage}`,
        })),
      )
      .then((articles) => {
        this.setState({
          articles,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <React.Fragment>
        <div className='container'>
          <h1 className='display-3 text-left font-weight-bold mb-3'>
            Top Headlines In India
          </h1>
        </div>
        <div className='container'>
          <div className='col-xs-12'>
            {!isLoading ? (
              articles.map((article) => {
                const { description, title, url, img } = article;
                return (
                  <div key={title}>
                    <div className='card mb-3'>
                      <img
                        className='card-img-top'
                        src={
                          img !== 'null'
                            ? img
                            : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
                        }
                        alt=''
                      />
                      <div className='card-body'>
                        <h5 className='card-title font-weight-bold'>{title}</h5>
                        <p className='card-text'>
                          {description !== 'null'
                            ? description
                            : 'No description available'}
                        </p>
                        <div className='col-md-4 col-lg-2'>
                          <a href={url} className='btn btn-primary btn-block'>
                            Go to article
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
