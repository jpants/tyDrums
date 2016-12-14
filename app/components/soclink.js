var React = require('react');

var SocLink = React.createClass({
  render: function() {
    return (
      <footer id='socLinkWrap'>
        <div className='backGlow'>
          <a href={this.props.href1} target="_blank"><div className={"socLinks " + this.props.name1}>
          </div></a>
        </div>
        <div className='backGlow'>
          <a href={this.props.href2} target="_blank"><div className={"socLinks " + this.props.name2}>
          </div></a>
        </div>
        <div className='backGlow'>
          <a href={this.props.href3} target="_blank"><div className={"socLinks " + this.props.name3}>
          </div></a>
        </div>
        <div className='backGlow'>
          <a href={this.props.href4} target="_blank"><div className={"socLinks " + this.props.name4}>
          </div></a>
        </div>
      </footer>
    )
  } 
});

module.exports = SocLink;