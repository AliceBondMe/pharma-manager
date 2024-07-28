import { Watch } from "react-loader-spinner";

import { loaderStyle } from "./Loader.styles";

const Loader = () => {
  return (
    <div>
      <div css={loaderStyle}>
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="var(--accent)"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loader;
