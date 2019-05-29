import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class HintMessage extends React.Component {
  renderLink() {
    if (!this.props.linkComponent) return null;

    return React.cloneElement(this.props.linkComponent, { className: classNames(`btn`, `btn-secondary`)} );
  }

  render() {
    return (
      <div className="hint-message text-center">
        <h2 className="h2-heading">{ this.props.header }</h2>
        { this.props.children }
        { this.renderLink() }
      </div>
    );
  }
}

HintMessage.propTypes = {
  header: PropTypes.string.isRequired,
  linkComponent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ]).isRequired
};

export default HintMessage;
