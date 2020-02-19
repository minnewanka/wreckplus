import React from 'react';

const withModal = WrappedComponent => {
  return class extends React.Component {
    constructor() {
      super();

      this.state = {
        modalIsOpen: false,
        itemId: '',
      };

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal(itemId) {
      this.setState({ modalIsOpen: true, itemId: itemId });
      //this.props.toggleNavbar();
    }

    afterOpenModal() {}

    closeModal() {
      this.setState({ modalIsOpen: false });
      //this.props.toggleNavbar();
    }

    render() {
      const { modalIsOpen, itemId } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          modalIsOpen={modalIsOpen}
          itemId={itemId}
          openModal={this.openModal}
          afterOpenModal={this.afterOpenModal}
          closeModal={this.closeModal}
        />
      );
    }
  };
};

export { withModal };
