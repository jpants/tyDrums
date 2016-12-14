var React = require('react');
var Banner = require('./banner');

var RapSheet = React.createClass({
  handleClick: function () {
    this.props.onClick('contact');
    window.history.pushState({url: 'contact'}, '', '/contact');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },

  render: function() {
    return (
      <div id='rapWrap'>
        <Banner name='TYLER STUCK' 
                pageId='rap'
                view={this.props.view} />

        <div id='tyPic'></div>

        <hr />

        <div id='rapTextBox'>
          <p>Tyler's extensive experience in the studio as a drummer, composer/arranger, and background vocalist has made him one of the most sought after studio drummers in the Mid West.
          </p>
        </div>

        <div id='hireButton' onClick={this.handleClick}>HIRE TYLER FOR YOUR NEXT PROJECT</div>

        <hr />

        <h2>RAP SHEET</h2>

        <div id='albumsWrap'>
          <div className='albums'></div>
          <div className='albums'></div>
          <div className='albums'></div>
          <div className='albums'></div>
          <div className='albums'></div>
          <div className='albums'></div>
        </div>

      </div>
    );
  } 
});

module.exports = RapSheet;