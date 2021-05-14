import { connect } from 'react-redux';
import Stat from './Stat';

const mapStateToProps = state => ({
  total: state.contacts.items.length,
});

export default connect(mapStateToProps)(Stat);
