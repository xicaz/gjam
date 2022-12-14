import React from "react";
import { useMediaQuery } from "react-responsive";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavMobile from "../Nav/NavMobile";
import RightNav from "../Nav/RightNav";
import "./Layout.css";

export default function Layout(props) {
  let searchStatus = false;
  if (props.search) {
    searchStatus = true;
  }

  const lgScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const mdScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="layout w-screen">
      {props.banner ? (
        <>
          {lgScreen || mdScreen ? <Banner user={props.user} /> : <NavMobile />}

          <div className="w-full">{props.children}</div>
          <Footer banner={props.banner} />
        </>
      ) : (
        <>
          {lgScreen || mdScreen ? (
            <RightNav
              className="z-30"
              cart={props.cart}
              user={props.user}
              dashboard={props.dashboard}
              search={searchStatus}
              handleSearch={props.handleSearch}
              handleSort={props.handleSort}
              handleSubmit={props.handleSubmit}
            />
          ) : (
            <NavMobile />
          )}

          <div className="h-full selection:lg:w-2/3 md:w-2/3 sm:w-screen px-5 lg:px-0 md:px-0 sm:px-24">
            {props.children}
          </div>
          <Footer />
        </>
      )}
      )
    </div>
  );
}
