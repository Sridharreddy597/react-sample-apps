import React from "react";
// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props.totalCounter);
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <span className="navbar-brand mb-0 h1">
//           Navbar <span>{this.props.totalCounter}</span>
//         </span>
//       </nav>
//     );
//   }
// }

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar <span>{props.totalCounter}</span>
      </span>
    </nav>
  );
};

export default Navbar;
