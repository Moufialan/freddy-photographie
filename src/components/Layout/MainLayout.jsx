import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/Footer';

const MainLayout = ({ children }) => {
  return (
    <motion.div
      className="min-h-screen w-full bg-subtle-gradient font-body"
      style={{ color: '#8F7A65' }}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;