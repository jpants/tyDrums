var React = require('react');
// var DefaultLayout = require('./layout/default');

class Index extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />

          <title>Ty$</title>
          
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:300,400" rel="stylesheet" />
          
          <link rel="stylesheet" type="text/css" href="cssreset.css" />

          <link rel="stylesheet" type="text/css" href="style.css" />
        </head>

        <body>
          <div id="app" className={this.props.theUrl + ' initial'}></div>
          <script type="text/javascript" src="transformed.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Index;