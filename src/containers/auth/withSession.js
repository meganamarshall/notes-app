import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { login } from '../../services/auth';
import { connect } from 'redux';
import { getToken } from '../../selectors/sessionSelector';


export const withSession = Component => {
  class WithSession extends PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired
    }

    componentDidMount() {
      if(!this.props.token) {
        login();
      }
    }

    render() {
      if(!this.props.token) return <h1>LoADING</h1>;
      return <Component />;
    }
  }
  const mapStateToProps = state => ({
    token: getToken(state)
  });
  
  return connect(
    mapStateToProps
  )(WithSession);
};
