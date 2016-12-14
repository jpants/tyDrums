var React = require('react');
var NavBarMobile = require('./navbarmobile');

var NavBar = React.createClass({
  componentDidMount: function() {
    window.addEventListener('popstate', this.handlePopState);
  },

  handlePopState: function(e) {
    var url = e.state.url;
    this.props.onClick(url);
  },

  handleClick: function (e) {
    var page = e.target.innerHTML.toLowerCase().replace(/ /g,'');
    this.props.onClick(page);
    // window.location.href = window.location.href + '#' + page.toLowerCase().replace(/ /g,'');
    window.history.pushState({url: page}, '', '/' + page);
    if (document.getElementById('app').classList.item(1) === 'initial') {
      document.getElementById('app').classList.remove('initial');
    }    
    document.getElementById('app').className = page;
  },

  render: function() {
    if (window.innerWidth >= 600) {
      return (
        <header id='standardView'>
          <ul>
            <li onClick={this.handleClick}>HOME</li>
            <li onClick={this.handleClick}>BIO</li>
            <li onClick={this.handleClick}>RAP SHEET</li>
            <li onClick={this.handleClick}>VIDEOS</li>
            <li onClick={this.handleClick}>CONTACT</li>
          </ul>
        </header>
      )
    } else {
      return (
        <NavBarMobile 
          onClick={this.props.onClick} />
      )
    }
  } 
});

module.exports = NavBar;