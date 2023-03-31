import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence } from 'framer-motion'

const Layout = ({ children }) => {
    return (
        <div className="layout" >
            <Navbar />
                <AnimatePresence mode="wait" initial={false}> 
                    {children}
                </AnimatePresence>
            <Footer />
        </div>
    )
}

export default Layout