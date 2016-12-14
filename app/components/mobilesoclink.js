var React = require('react');

var MobileSocLink = React.createClass({
  render: function() {
    return (
      <footer id="mobileSocLinkWrap">
        <a href={this.props.href1} target="_blank">
          <div className="socLinks" id={this.props.name1}>
          </div>
        </a>
        <a href={this.props.href2} target="_blank">
          <div className="socLinks" id={this.props.name2}>
          </div>
        </a>
        <a href={this.props.href3} target="_blank">
          <div className="socLinks" id={this.props.name3}>
          </div>
        </a>
        <a href={this.props.href4} target="_blank">
          <div className="socLinks" id={this.props.name4}>
          </div>
        </a>
      </footer>
    )
  } 
});

module.exports = MobileSocLink;