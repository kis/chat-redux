import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Options from '../components/Options/Options';
import Chat from '../components/Chat/Chat';

class App extends Component {
  render() {
    console.log(this.props)
    
    return (
      <div>
        <Options field={this.props.field} options={this.props.options} actions={this.props.actions} />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  options: state.options
});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(App);