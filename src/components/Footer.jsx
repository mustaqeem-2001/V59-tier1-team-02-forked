


export default function Footer() {
  return (
    <footer className="bg-primary text-white font-body p-4 text-center">

      {/* Badges and Main contents Container */}
      <div className="max-w-7xl mx-auto px-margin-inline-base py-space-lg">

        {/* Repo badge / title Container */}
        <div className="flex items-center justify-start gap-space-md mb-space-lg">
          <a
            href="https://github.com/your-org/v59-tier1-team-02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-space-sm text-white no-underline"
            aria-label="Repository on GitHub"
            title="v59-tier1-team-02 on GitHub"
          >
            <i className="fa-brands fa-github Repo-badge" aria-hidden="true" />
            <span className="ml-space-sm text-md font-semibold">v59-tier1-team-02</span>
          </a>
        </div>


        {/* Main content */}
        <div className="flex flex-col">

          {/* Heading + lists Container */}
          <div className="w-full md:w-2/3">

            {/* Heading */}
            <h2 className="font-heading text-2xl md:text-3xl lg:text-h1 font-semibold mb-space-md footer-heading">
              Meet the Team
            </h2>

            {/* lists container */}
            <div className="footer-list-container">

              {/* Developers List*/}
              <div className="developers-list">
                <h3>Developers</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-start gap-space-sm">
                    <span className="text-md">Maryann</span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-white hover:text-secondary"
                      aria-label="Maryann GitHub"
                      title="Maryann GitHub"
                    >
                      <i className="fa-brands fa-github text-xl" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-space-sm text-white hover:text-secondary"
                      aria-label="Maryann LinkedIn"
                      title="Maryann LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin text-xl" aria-hidden="true" />
                    </a>
                  </li>

                  {/* Eleni */}
                  <li className="flex items-center justify-start gap-space-sm">
                    <span className="text-md">Eleni</span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-white hover:text-secondary"
                      aria-label="Eleni GitHub"
                      title="Eleni GitHub"
                    >
                      <i className="fa-brands fa-github text-xl" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-space-sm text-white hover:text-secondary"
                      aria-label="Eleni LinkedIn"
                      title="Eleni LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin text-xl" aria-hidden="true" />
                    </a>
                  </li>

                  {/* Mustaqueem */}
                  <li className="flex items-center justify-start gap-space-sm">
                    <span className="text-md">Mustaqueem</span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-white hover:text-secondary"
                      aria-label="Mustaqueem GitHub"
                      title="Mustaqueem GitHub"
                    >
                      <i className="fa-brands fa-github text-xl" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-space-sm text-white hover:text-secondary"
                      aria-label="Mustaqueem LinkedIn"
                      title="Mustaqueem LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin text-xl" aria-hidden="true" />
                    </a>
                  </li>

                  {/* Micheal */}
                  <li className="flex items-center justify-start gap-space-sm">
                    <span className="text-md">Micheal</span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-white hover:text-secondary"
                      aria-label="Micheal GitHub"
                      title="Micheal GitHub"
                    >
                      <i className="fa-brands fa-github text-xl" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-space-sm text-white hover:text-secondary"
                      aria-label="Micheal LinkedIn"
                      title="Micheal LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin text-xl" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Scrum Master */}
              <div className="scrum-masters-list">
                <h3>Scrum Master</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-start gap-space-sm">
                    <span className="text-md">Furtuna</span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-white hover:text-secondary"
                      aria-label="Furtuna GitHub"
                      title="Furtuna GitHub"
                    >
                      <i className="fa-brands fa-github text-xl" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-space-sm text-white hover:text-secondary"
                      aria-label="Furtuna LinkedIn"
                      title="Furtuna LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin text-xl" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Shadow scrum master */}
              <div>
                <h3>Shadow Scrum Master</h3>
                <ul>
                  <li className="flex items-center justify-start gap-space-sm">
                    <span className="text-md">Jandro</span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-white hover:text-secondary"
                      aria-label="Jandro GitHub"
                      title="Jandro GitHub"
                    >
                      <i className="fa-brands fa-github text-xl" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-space-sm text-white hover:text-secondary"
                      aria-label="Jandro LinkedIn"
                      title="Jandro LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin text-xl" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-space-lg border-t border-white/20 footer-bottom-row">
          <div className="flex flex-col md:flex-row items-center justify-between gap-space-sm">
            <p className="text-sm">&copy; {new Date().getFullYear()} Pathfinder | All rights reserved.</p>
            <div className="text-sm text-white/90">Built by V59-tier1-team-02</div>
          </div>
        </div>
      </div>
    </footer>
  );
}