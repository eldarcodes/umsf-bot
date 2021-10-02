import styled from "styled-components";
import { Spin } from "@bot/ui";

const Loader: any = styled(Spin)`
  height: ${(props: any) => props.height || "100px"};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loader;
