var React = require("react");
var ReactDOM = require("react-dom");

class Users extends React.Component {
  render() {
    var friends = this.props.list.filter(function(user) {
      return user.friend === true;
    });

    var nonFriends = this.props.list.filter(function(user) {
      return user.friend !== true;
    });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(function(user) {
            return <li>{user.name}</li>;
          })}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {nonFriends.map(function(user) {
            return <li>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  list: React.propTypes.array.isRequired
};
