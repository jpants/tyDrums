var React = require('react');
var Banner = require('./banner');

var Bio = React.createClass({
  render: function() {
    return (
      <div id='bioWrap'>
        <Banner name='TYLER STUCK' 
                pageId='bio'
                view={this.props.view} />
        <div id='bioTextBox'>
          <div id='tyPic'></div>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  } 
});

module.exports = Bio;