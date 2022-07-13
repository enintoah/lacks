import React from "react";

class TextBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
        <button>Submit Message</button>
      </form>
    )
  }
}
