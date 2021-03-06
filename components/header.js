import React from "react";
import { NavLink, Flex, Box } from "theme-ui";
import Link from "next/link";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => (
  <Box
    as="header"
    sx={{
      backgroundColor: `primary`,
      marginBottom: `1.45rem`,
    }}
  >
    <Flex
      as="nav"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        justifyContent: "space-evenly",
      }}
    >
      <NavLink href={"/"} as={Link}>
        Home
      </NavLink>
      <NavLink href={"/products"} as={Link}>
        Products
      </NavLink>
    </Flex>
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
