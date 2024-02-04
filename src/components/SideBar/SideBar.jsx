import { Icon } from "components/Icon";
import { theme } from "../../index.js";
import {
  SidebarContainer,
  SvgLightningContainer,
  Logo,
  BoardContainer,
  BoardList,
  BoardCreationBlock,
  BtnCreate,
  NeedHelpBlock,
  StyledSpan,
  NeedHelpBtn,
  LogOut,
} from './SideBar.styled';

export const Sidebar = () => {
    return (
      <SidebarContainer>
        <Logo>
          <SvgLightningContainer>
            <Icon name="lightning" width="12" height="16" />
          </SvgLightningContainer>
          <h2>TaskPro</h2>
        </Logo>
        <BoardContainer>
          <h3>My boards</h3>
          <BoardCreationBlock>
            <p>
              Create a<br />
              new board
            </p>
            <BtnCreate type="button">
              <Icon name="plus" width="20" height="20" />
            </BtnCreate>
          </BoardCreationBlock>
          <BoardList>
            <li>Board item</li>
          </BoardList>
        </BoardContainer>
        <NeedHelpBlock>
          <img
            src="https://res.cloudinary.com/dt7u6ic1c/image/upload/v1706907537/sidebar-img-1x.jpg"
            alt="cute little cactus"
          ></img>
          <p>
            If you need help with <StyledSpan>TaskPro</StyledSpan>, check out
            our support resources or reach out to our customer support team.
          </p>
          <NeedHelpBtn type="button">
            <div style={{ stroke: theme.colors.whiteColor }}>
              <Icon name="help" width="20" height="20" />
            </div>
            <span>Need help?</span>
          </NeedHelpBtn>
        </NeedHelpBlock>
        <LogOut type="button">
          <div style={{ stroke: theme.colors.accent }}>
            <Icon name="login" width="32" height="32" />
          </div>
          <p>Log out</p>
        </LogOut>
      </SidebarContainer>
    );
}