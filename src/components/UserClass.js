import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log("Constructor called");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log("Render called");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @hs19</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * --- MOUNTING ---
 *
 * Constructor (dummy)
 * Render (dummy)
 *    <HTML Dummy >
 * Component Did Mount
 *    <API Call>
 *    <this.setState> -> State variable is updated
 *
 * --- UPDATE ---
 *
 *    render(API data)
 *    <HTML (new API data)
 * componentDidUpdate
 *
 *
 *
 */
