import React from 'react';
import {NavLink} from "react-router";

function Header(props: any) {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                   alt="Your Company" className="size-8"/>
            </div>
            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-gray-600 px-3 py-2 text-sm font-medium text-white"
                      : "rounded-md px-3 py-2 text-sm font-medium text-white"
                  }
                >
                  Le nostre pizze
                </NavLink>
                <NavLink
                  to="/kitchen"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-md bg-gray-600 px-3 py-2 text-sm font-medium text-white"
                      : "rounded-md px-3 py-2 text-sm font-medium text-white"
                  }
                >
                  Cucina
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;