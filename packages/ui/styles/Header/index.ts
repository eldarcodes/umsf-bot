import styled from "styled-components";
import { Layout } from "@bot/ui";

const { Header } = Layout;

export const BotHeader = styled(Header)`
  padding: 0;
  background: ${props => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  .header-fold-icon {
    font-size: ${props => props.theme.fontSize.lg};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
