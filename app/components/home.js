var React = require('react');
var Banner = require('./banner')

var Home = React.createClass({
  componentWillMount: function() {
    window.history.pushState({url: 'home'}, '', '/home');
  },

  render: function() {
    return (
      <div id='homeWrap'>
        
        <Banner 
          name='TYLER STUCK'
          pageId='home' />

      </div>
    )
  } 
});

module.exports = Home;