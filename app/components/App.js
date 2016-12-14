var React = require('react');
var NavBar = require('./navbar');
var Pages = require('./pages');
var Footer = require('./footer');


var App = React.createClass({
	getInitialState: function() {
		return {
			page: 'home',
			footer: 'mobile'
		};
	},

	changePage: function (newPage) {
    this.setState({
      page: newPage
    });

  },

  changeFoot: function (newFoot) {
  	this.setState({
  		footer: newFoot
  	});
  },

  nonHome: function () {
    var appBckgrnd;
    if (this.state.page === 'home') {
      appBckgrnd = 'home';
    } else {
      appBckgrnd = 'nonHome';
    };
    return appBckgrnd;
  },

  render: function(){
    return (

      <div id='appWrap' className={this.nonHome()}>
      	<NavBar onClick={this.changePage} 
      					view={this.state.footer} />

	      <Pages 
	      	page={this.state.page} 
          onClick={this.changePage} />

	      <Footer 
	      	page={this.state.page}
	      	footer={this.state.footer} 
	      	onResize={this.changeFoot} />
      </div>
    )
  }
});

module.exports = App;