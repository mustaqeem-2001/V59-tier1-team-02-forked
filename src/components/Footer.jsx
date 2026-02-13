import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white font-body p-4 text-center">
      <div className="max-w-7xl mx-auto px-margin-inline-base py-space-lg">
        {/* Top row: repo badge / title */}
        <div className="flex items-center justify-start gap-space-md mb-space-lg">
          <a
            href="https://github.com/your-org/v59-tier1-team-02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-space-sm text-white no-underline"
            aria-label="Repository on GitHub"
            title="v59-tier1-team-02 on GitHub"
          >
            <i className="fa-brands fa-github text-2xl" aria-hidden="true" />
            <span className="ml-space-sm text-md font-semibold">v59-tier1-team-02</span>
          </a>
        </div>

        {/* Main content: Meet the Team */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-space-lg">
          {/* Center column: heading + lists */}

          <div className="w-full md:w-2/3">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-h1 font-semibold mb-space-md footer-heading">
              Meet the Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              {/* Developers */}
              <div>
                <h3 className="text-lg font-semibold mb-space-sm">Developers</h3>
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

              {/* Scrum Masters */}
              <div>
                <h3 className="text-lg font-semibold mb-space-sm">Scrum Masters</h3>
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

          {/* Right column: Pathfinder info */}
          <div className="w-full md:w-1/3 flex items-center md:justify-end mt-space-md md:mt-0">
            <div className="text-right">
              <p className="text-md font-semibold">Pathfinder Media</p>
              <p className="text-sm text-white/90">Open source collaboration</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-space-lg border-t border-white/20 pt-space-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-space-sm">
            <p className="text-sm">&copy; {new Date().getFullYear()} Pathfinder | All rights reserved.</p>
            <div className="text-sm text-white/90">Built by V59-tier1-team-02</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
