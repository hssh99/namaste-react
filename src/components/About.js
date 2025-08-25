import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Constructor parent");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Render parent");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is About Us Page</h2>

        <UserClass name={"First"} location={"Mumbai"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About Us Page</h2>

//       <UserClass name={"Harshal Shirke classs"} location={"Mumbai Class"} />
//     </div>
//   );
// };

export default About;
