import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>supercoder</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequre,
};

export default wrapper.withRedux(App);
