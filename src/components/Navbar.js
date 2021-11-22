

const Navbar = ({currentPage, handlePageChange}) => {
    return (
        // <ul class="navbar-nav navbar-right">
        //     <li class="nav-item"><a class="nav-link" href="#AboutMe">About me </a></li>
        //     <li class="nav-item"><a class="nav-link" href="#MyProjects">Projects </a></li>
        //     <li class="nav-item"> <a class="nav-link" href="#footer"> Contact me</a></li>
        //     <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/in/satishi/"
        //             target="_blank">Resume </a></li>
        // </ul>

        <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Aboutme"
          onClick={() => handlePageChange('Aboutme')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Aboutme' ? 'nav-link active' : 'nav-link'}
        >
          AboutMe
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    )
}

export default Navbar


