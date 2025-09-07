import React from 'react';
import {NavLink} from "react-router";
// @ts-ignore
import logo from "../assets/logo.png";
// @ts-ignore
import oven from "../assets/oven.png";

function Header(props: any) {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                src={logo}
                alt="Your Company"
                className="size-10 rotate-20"
              />
            </div>
            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  end
                  className={({isActive}) =>
                    isActive
                      ? "rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-600"
                      : "rounded-md px-3 py-2 text-sm font-medium text-white"
                  }
                >
                  Menù
                </NavLink>
                <NavLink
                  to="/orders"
                  end
                  className={({isActive}) =>
                    isActive
                      ? "rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-600"
                      : "rounded-md px-3 py-2 text-sm font-medium text-white"
                  }
                >
                  Ordini
                </NavLink>
              </div>
            </div>

          </div>
          <NavLink
            to="/kitchen"
            end
            className={({isActive}) =>
              isActive
                ? "flex items-center justify-center gap-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-600"
                : "flex items-center justify-center gap-4 px-3 py-2  rounded-md text-sm font-medium text-white"
            }
          >
            <img
              src={oven}
              className="size-8"
              alt="awesome pizza"
            />
            Cucina
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;