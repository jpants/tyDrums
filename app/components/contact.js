var React = require('react');
var Banner = require('./banner');

var Contact = React.createClass({
  render: function() {
    return (
      <div id='contactWrap'>
        <Banner name='TYLER STUCK' 
                pageId='contact'
                view={this.props.view} />

        <h2>CONTACT TYLER</h2>

        <form id='contactForm'>
          <table id='contactTable'>
            <tbody>
              <tr>
                <td>
                  <input id='fNameContact' type="text" name="firstName" placeholder="First Name*" />
                </td>
                <td>
                  <input id='lNameContact' type="text" name="lastName" placeholder="Last Name*" />
                </td>
              </tr>

              <tr className='spacerContact'>
                <td>&nbsp;</td>
              </tr>

              <tr>
                <td colSpan='2'>
                  <input id='emailContact' type="email" name="emailContact" placeholder="Email@email.com*" />
                </td>
              </tr>

              <tr className='spacerContact'>
                <td>&nbsp;</td>
              </tr>

              <tr>
                <td colSpan='2'>
                  <input id='subjectContact' type="text" name="subjectContact" placeholder="Subject*" />
                </td>
              </tr>

              <tr className='spacerContact'>
                <td>&nbsp;</td>
              </tr>

              <tr>
                <td colSpan='2'>
                  <textarea id='commentContact' name="txtComment" placeholder="Message...*" rows="6"></textarea>
                </td>
              </tr>

              <tr className='spacerContact'>
                <td>&nbsp;</td>
              </tr>

              <tr>
                <td colSpan='2'>
                  <button id='submitBtnContact' type='button'>
                    SUBMIT
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  } 
});

module.exports = Contact;