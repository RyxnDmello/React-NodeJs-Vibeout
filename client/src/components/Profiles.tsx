import { useState } from "react";

import Chat from "./Profiles/Chat";

export default function Profiles() {
  const [room, setRoom] = useState<string>("");

  const onHandleSetRoom = (room: string) => setRoom(room);

  const className = "profiles";

  return (
    <section id={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <h2 className={`${className}-logo`}>Vibeout</h2>
        </div>

        <form className={`${className}-search`} action="/search" method="post">
          <input
            className={`${className}-search-bar`}
            placeholder="Search"
            name="search"
            type="text"
          />
        </form>

        <div className={`${className}-chats`}>
          <div className={`${className}-chats-wrapper`}>
            {Array.from({ length: 10 }, (_, i) => (
              <Chat
                key={i}
                room={`${i}`}
                isSelected={`${i}` === room}
                onSelectChat={onHandleSetRoom}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
