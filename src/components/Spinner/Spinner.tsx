import React, { CSSProperties } from 'react'
import BeatLoader from "react-spinners/BeatLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = () => {
  return (
    <BeatLoader
        color={"green"}
        loading={true}
        cssOverride={override}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
        className='text-center'
      />
  )
}

export default Spinner