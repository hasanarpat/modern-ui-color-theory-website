"use client";
import Image from "next/image";
import React, { useState } from "react";
import Cube from "public/cube.webp";
import Link from "next/link";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mobile">
      <div>
        <Image
          alt="menu"
          src={Cube}
          width={36}
          height={36}
          onClick={(e) => setMenuOpen((prev) => !prev)}
          className="cube"
        />
        <div className="bg" />
      </div>

      {menuOpen && (
        <div className="mobile__menu">
          <ul className="menu__list">
            <li className="menu_list_item">
              <Link
                onClick={(e) => setMenuOpen(false)}
                href="#product"
                className="menu__list__item list__item__1"
              >
                Product
              </Link>
            </li>
            <li className="menu_list_item">
              <Link
                onClick={(e) => setMenuOpen(false)}
                href="#pricing"
                className="menu__list__item list__item__2"
              >
                Pricing
              </Link>
            </li>
            <li className="menu_list_item">
              <Link
                onClick={(e) => setMenuOpen(false)}
                href="#blog"
                className="menu__list__item list__item__3"
              >
                Blog
              </Link>
            </li>
            <li className="menu_list_item">
              <Link
                onClick={(e) => setMenuOpen(false)}
                href="#partners"
                className="menu__list__item list__item__4"
              >
                Partners
              </Link>
            </li>
            <li className="menu_list_item">
              <Link
                onClick={(e) => setMenuOpen(false)}
                href="#contact"
                className="menu__list__item list__item__5"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
