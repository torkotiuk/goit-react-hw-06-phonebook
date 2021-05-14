// import { connect } from 'react-redux';
import styles from './Stat.module.scss';

const Stat = ({ total }) => {
  return <div className={styles.Stat}>({total})</div>;
};

export default Stat;

// const mapStateToProps = state => ({
//   total: state.contacts.items.length,
// });

// export default connect(mapStateToProps)(Stat);
