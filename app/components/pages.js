var React = require('react');
var Home = require('./home');
var Bio = require('./bio');
var RapSheet = require('./rapsheet');
var Videos = require('./videos');
var Contact = require('./contact');

function thePage(page, theView, onClick) {
  switch (page) {
    case 'home':
      return <Home />;
      break;
    case 'bio':
      return <Bio view={theView} />;
      break;
    case 'rapsheet':
      return <RapSheet view={theView} 
                       onClick={onClick} />;
      break;
    case 'videos':
      return <Videos view={theView} />;
      break;
    case 'contact':
      return <Contact view={theView} />;
      break;
    default:
      return <Home />;
  };
};

var Pages = React.createClass({
  render: function() {
    var page;
    // var page=this.props.page;
    // var page=document.getElementById('app').classList.item(0);
    var theView;
    var onClick=this.props.onClick;

    if (document.getElementById('app').classList.contains('initial')) {
      page = document.getElementById('app').classList.item(0);
    }
    else {
      page = this.props.page;
    };

    if (document.getElementById('standardView')) {
      theView = 'standard';
    };


    return (
      thePage(page, theView, onClick)
    );
  } 
});

module.exports = Pages;