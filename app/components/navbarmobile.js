var React = require('react');

var NavBarMobile = React.createClass({
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
    this.handleButtonClick();
    window.history.pushState({url: page}, '', '/' + page);
    if (document.getElementById('app').classList.item(1) === 'initial') {
      document.getElementById('app').classList.remove('initial');
    }    
    document.getElementById('app').className = page;
  },

  handleButtonClick: function() {
    document.getElementById('topBar').classList.toggle('topMove');
    document.getElementById('middleBar').classList.toggle('midMove');
    document.getElementById('bottomBar').classList.toggle('botMove');
    document.getElementById('navBar').classList.toggle('hidden');
    document.getElementById('mobileView').classList.toggle('hidden');
  },

  render: function() {
    return (
      <header id='mobileView' className='hidden'>
        <button onClick={this.handleButtonClick} id='menuButton'>
          <div className='buttonBars' id='topBar'></div>
          <div className='buttonBars' id='middleBar'></div>
          <div className='buttonBars' id='bottomBar'></div>
        </button>

        <ul id='navBar' className='hidden'>
          <li onClick={this.handleClick}>HOME</li>
          <li onClick={this.handleClick}>BIO</li>
          <li onClick={this.handleClick}>RAP SHEET</li>
          <li onClick={this.handleClick}>VIDEOS</li>
          <li onClick={this.handleClick}>CONTACT</li>
        </ul>
      </header>
    )
  } 
});

module.exports = NavBarMobile;