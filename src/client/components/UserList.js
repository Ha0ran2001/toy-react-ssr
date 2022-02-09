import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchUsers } from '../redux/users/users.actions';

import styles from './style.module.css';

// const UserList = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, []);

//   return (
//     <div>
//       <div>User page</div>
//       <Link to="/">To Home page</Link>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.first_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// UserList.getInitialData = async (store) => {
//   return await store.dispatch(fetchUsers());
// };

// export default UserList;

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }

  render() {
    const { users } = this.props;
    return (
      <div className={styles['box']}>
        <div>User page</div>
        <Link to="/">To Home page</Link>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.first_name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

UserList.getInitialData = (store) => {
  return store.dispatch(fetchUsers());
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers() {
    dispatch(fetchUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
