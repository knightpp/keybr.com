import { ClientCodec } from "@keybr/multiplayer-shared";
import { type AnyUser } from "@keybr/pages-shared";
import { Article, Para, styleTextCenter } from "@keybr/widget";
import { type ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { Game } from "./Game.tsx";
import { WebSocketTransport } from "./transport.websocket.ts";
import { useWebSocket } from "./websocket-hooks.ts";

export function Connector({ user }: { readonly user: AnyUser }): ReactNode {
  const { webSocket, readyState, kicked } = useWebSocket(user);
  switch (readyState) {
    case WebSocket.CONNECTING:
      return <Connecting />;
    case WebSocket.OPEN:
      return (
        <>
          <Banner />
          <Game
            transport={new WebSocketTransport(webSocket!, new ClientCodec())}
          />
        </>
      );
    default:
      if (kicked) {
        return <Kicked />;
      } else {
        return <Offline />;
      }
  }
}

function Banner(): ReactNode {
  return (
    <Para className={styleTextCenter}>
      <FormattedMessage
        id="multiplayer.intro"
        description="Freeform text."
        defaultMessage="Compete against other players in this online multiplayer game. The faster you type, the faster your car goes. Type as fast as you can to win the race!"
      />
    </Para>
  );
}

function Connecting(): ReactNode {
  return (
    <Article>
      <FormattedMessage
        id="multiplayer.state.connecting"
        description="Freeform text."
        defaultMessage={
          "<h1>Connecting to Server...</h1>" +
          "<p>Establishing connection to the game server.</p>"
        }
      />
    </Article>
  );
}

function Offline(): ReactNode {
  return (
    <Article>
      <FormattedMessage
        id="multiplayer.state.offline"
        description="Freeform text."
        defaultMessage={
          "<h1>Server is Offline</h1>" +
          "<p>Something is wrong with our game server.</p>" +
          "<p>Please revisit this site in a few minutes while we are fixing the problem.</p>"
        }
      />
    </Article>
  );
}

function Kicked(): ReactNode {
  return (
    <Article>
      <FormattedMessage
        id="multiplayer.state.kicked"
        description="Freeform text."
        defaultMessage={
          "<h1>Kicked out of the Game</h1>" +
          "<p>You were kicked out of the game for being inactive.</p>"
        }
      />
    </Article>
  );
}
