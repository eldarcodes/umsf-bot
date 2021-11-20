import styled from "styled-components";
import { LoaderProps, Spin } from "@bot/ui";

const Loader = styled(Spin)<LoaderProps>`
  height: ${props => `${props.height || 100}px`};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loader;
