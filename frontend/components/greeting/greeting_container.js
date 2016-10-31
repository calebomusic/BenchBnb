import Greeting from './greeting';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = (state) => (
  {
    currentUser: state.session.currentUser
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)
