import { Icon } from "components/Icon";
import { SidebarContainer, StyledIcon, SvgLightningContainer } from './SideBar.styled';

export const Sidebar = () => {
    return (
      <SidebarContainer>
        <div>
          <SvgLightningContainer>
            <StyledIcon name="lightning" />
          </SvgLightningContainer>
          <h2>TaskPro</h2>
        </div>
        <h3>My boards</h3>
        <p>Create a new board</p>
        <button type="button" style={{ stroke: 'black' }}>
          <Icon name="plus" />
        </button>
        <li>
          <p>Board list</p>
        </li>
        <div>
          <img
            src="https://res.cloudinary.com/dt7u6ic1c/image/upload/v1706907537/sidebar-img-1x.jpg"
            alt="cute little cactus"
          ></img>
          <p>
            If you need help with TaskPro, check out our support resources or
            reach out to our customer support team.
          </p>
          <div style={{ stroke: 'black' }}>
            <Icon name="help" />
          </div>
          <p>Need help?</p>
        </div>
        <div>
          <div style={{ stroke: 'black' }}>
            <Icon name="login" />
          </div>
          <p>Log out</p>
        </div>
      </SidebarContainer>
    );
}