import { Icon } from 'components/Icon';
import { theme } from '../../index.js';
import {
  SidebarContainer,
  Logo,
  BoardContainer,
  BoardList,
  BoardCreationBlock,
  BtnCreate,
  NeedHelpBlock,
  NeedHelpBtn,
  LogOut,
  BoardItem,
  ControlIconsContainer,
} from './SideBar.styled';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <Icon name="logo" width="32" height="32" />
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
          <BoardItem>
            <Icon
              name="four-circles"
              width="18"
              height="18"
              style={{ opacity: 0.5 }}
            />
            <p>Board name</p>
            <ControlIconsContainer>
              <button type="button">
                <Icon name="pencil" width="16" height="16" />
              </button>
              <button>
                <Icon name="trash" width="16" height="16" />
              </button>
            </ControlIconsContainer>
          </BoardItem>
        </BoardList>
      </BoardContainer>
      <NeedHelpBlock>
        <img
          src="https://res.cloudinary.com/dt7u6ic1c/image/upload/v1706907537/sidebar-img-1x.jpg"
          alt="cute little cactus"
        ></img>
        <p>
          If you need help with <span style={{color: theme.colors.accent}}>TaskPro</span>, check out our
          support resources or reach out to our customer support team.
        </p>
        <NeedHelpBtn type="button">
          <div style={{ stroke: theme.colors.whiteColor }}>
            <Icon name="help" width="20" height="20" />
          </div>
          <span>Need help?</span>
        </NeedHelpBtn>
      </NeedHelpBlock>
      <LogOut type="button">
        <Icon name="login" width="32" height="32" />
        <p>Log out</p>
      </LogOut>
    </SidebarContainer>
  );
};
