import { Icon } from "components/Icon"

export const Sidebar = () => {
    return (
      <>
        <div style={{ stroke: 'black' }}>
          <Icon name="lightning" />
        </div>
        <h2>TaskPro</h2>
        <h3>My boards</h3>
        <p>Create a new board</p>
        <button type="button" style={{ stroke: 'black' }}>
          <Icon name="plus" />
        </button>
        <li>
          <p>Board list</p>
        </li>
        <div>
          <p>Cactus</p>
          <p>
            If you need help with TaskPro, check out our support resources or
            reach out to our customer support team.
          </p>
          <div>
            <Icon />
          </div>
        </div>
      </>
    );
}