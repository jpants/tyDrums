var React = require('react');
var Banner = require('./banner');

var Videos = React.createClass({
  render: function() {
    return (
      <div id='vidWrap'>
        <Banner name='TYLER STUCK' 
                pageId='vid'
                view={this.props.view} />

        <iframe className='yt' src="https://www.youtube.com/embed/Ak-1xeAdGjk?rel=0&amp;showinfo=0&amp;theme=light&amp;controls=2&amp;modestbranding=1" frameBorder="0" allowFullScreen></iframe>

        <iframe className='yt' src="https://www.youtube.com/embed/6HxxpiuMLps?rel=0&amp;showinfo=0&amp;theme=light&amp;controls=2&amp;modestbranding=1" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  } 
});

module.exports = Videos;