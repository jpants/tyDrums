var React = require('react');
var Mobile = require('./mobilesoclink');
var Standard = require('./soclink');

var Footer = React.createClass({
  footerCheck: function() {
    var newFoot;

    if (window.innerWidth > 768) {
      newFoot='standard';
      this.props.onResize(newFoot);
    }
    else {
      newFoot='mobile';
      this.props.onResize(newFoot);
    };
  },

  componentWillMount: function() {
    this.footerCheck();
  },

  componentDidMount: function() {
    window.addEventListener("resize", this.footerCheck);
  },

  componentWillUnmount: function() {
    window.removeEventListener("resize", this.footerCheck);
  },

  render: function() {
    if (this.props.footer === 'mobile') {
      return ( <Mobile 
                    name1='facebook' 
                    name2='twitter'
                    name3='instagram'
                    name4='soundcloud'
                    href1='https://www.facebook.com/tyler.stuck'
                    href2='https://twitter.com/tylerjstuck'
                    href3='https://www.instagram.com/tylerstuck/'
                    href4='https://soundcloud.com/st-james-17' /> 
      );
    } 
    else {
      return ( <Standard 
                    name1='facebook' 
                    name2='twitter'
                    name3='instagram'
                    name4='soundcloud'
                    href1='https://www.facebook.com/tyler.stuck'
                    href2='https://twitter.com/tylerjstuck'
                    href3='https://www.instagram.com/tylerstuck/'
                    href4='https://soundcloud.com/st-james-17' />
      );
    };
  } 
});

module.exports = Footer;