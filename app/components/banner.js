var React = require('react');

var Banner = React.createClass({
  render: function() {
    var classes;
    switch (this.props.view) {
      case 'standard':
        classes = 'bannerWrap standard';
        break;
      default:
        classes = 'bannerWrap';
    };

    return (
      <div className={classes} id={this.props.pageId+'Banner'}>
        <div className='bannerBorder'>
          <div className='dots' id='leftDot'></div>
          <div className='dots' id='rightDot'></div>
          <span className='banner'>{this.props.name}</span>
        </div>
      </div>
    )
  } 
});

module.exports = Banner;