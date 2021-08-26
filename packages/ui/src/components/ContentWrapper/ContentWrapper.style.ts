import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

const MyContent = styled(Content)`
  padding: 0 50px;
  margin-top: 20px;

  .site-layout-content {
    min-height: 88vh;
    padding: 24px;
    background: #fff;
  }
`;

export default MyContent;
