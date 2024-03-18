import Sender from "../images/messages/sender.png";

import Bubble from "./Messages/Bubble";
import Controller from "./Messages/Controller";

export default function Messages() {
  const className = "message";

  return (
    <section id="messages">
      <div className="messages-header">
        <img className="messages-header-icon" src={Sender} />
        <h4 className="messages-header-name">Sydney Sweeny</h4>
      </div>

      <div className={`${className}-bubbles`}>
        {Array.from({ length: 20 }, (_, i) => (
          <Bubble key={i} message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, nisi?" isSent={i % 2 === 0} />
        ))}
      </div>

      <Controller placeholder="Message..." />
    </section>
  );
}
