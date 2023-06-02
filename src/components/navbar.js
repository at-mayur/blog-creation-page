import styles from "../styles/navbarStyles.module.css";

// Navbar Component
function Navbar(){

    // handler to expand collapsed navbar
    function handleExpandNav(){

        document.getElementById("navbar-elements").classList.toggle(styles.expand);

    }

    return (
        <div className={styles.nav}>

            {/* Link to recent blogs Page */}
            <button className={styles.brand+" "+styles.linkButton}>
                XYZ Blogs
            </button>

            {/* Btn to expand and collapse navbar on smaller screen */}
            <button type="button" className={styles.btn} onClick={ handleExpandNav }>
                <i className="fa-solid fa-bars"></i>
            </button>


            <div id="navbar-elements" className={styles.navElements}>

                <div className={styles.navList}>
                    {/* Link to Recent Blogs Page */}
                    <button className={styles.navItem+" "+styles.linkButton}>
                        Recent Blogs
                    </button>

                    {/* Link to Create Blog Page */}
                    <button className={styles.navItem+" "+styles.linkButton}>
                        Create Blog
                    </button>
                </div>

                <div className={styles.navList+" "+styles.rightAlign}>

                    {/* User Profile */}
                    <button className={styles.navItem+" "+styles.linkButton}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="User" className={styles.img} />
                        <span>Mayur</span>
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Navbar;