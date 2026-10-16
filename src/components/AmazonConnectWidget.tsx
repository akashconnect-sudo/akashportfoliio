"use client";

import { useEffect } from "react";

const WIDGET_SCRIPT_ID = "dd9c4fb4-37f7-4008-a3e3-df859d391fb6";
const SNIPPET_ID =
  "QVFJREFIaDRobWZ4TDRrQys5SXJsU0RsT2NjaHpDOEQvN3ZqSEZkQWdhY1I3SUhoUXdFWXlQeE9QakNRSHQzQk9CZlRjaHI1QUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNSmVxOWpGZ1R3NkIvbmtUL0FnRVFnQ3Y0bWZwUUdYdU1KRFJnRGpxb28za1RlSTc2YmlDUjIwSGxmTXplNWYxSDROcnYyNEFhVVlNVUVWNE46Onh6ajVuOW9XTGoySFo1TkJxR2E3VWhDTUxIaEYzZnhzcThnemQwR2xHQWFsVGRMWlIvSzRlSmRieU5ycUY3aXpibWdLMWk0USt3bG1saTM2ODlmcUZnREtRUlVBcmtaRUZ5K3JaWVZTYWpMT3NoNWxVNldEcStoa2ZhYktPTE1VMUl5OEJWTStxREduRXFtVzNNTE0vYWlPNTB5QnVEbz0=";

type ConnectFn = ((...args: unknown[]) => void) & { ac?: unknown[][] };

/**
 * Official Amazon Connect hosted chat widget.
 * Replaces the custom Live Support panel.
 */
export default function AmazonConnectWidget() {
  useEffect(() => {
    if (document.getElementById(WIDGET_SCRIPT_ID)) return;

    const w = window as Window & { amazon_connect?: ConnectFn };

    const script = document.createElement("script");
    script.src =
      "https://myconnectworkbench.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js";
    script.async = true;
    script.id = WIDGET_SCRIPT_ID;
    document.head.appendChild(script);

    w.amazon_connect =
      w.amazon_connect ||
      function amazonConnect(...args: unknown[]) {
        const fn = w.amazon_connect as ConnectFn;
        fn.ac = fn.ac || [];
        fn.ac.push(args);
      };

    w.amazon_connect("styles", {
      iconType: "CHAT",
      openChat: { color: "#ffffff", backgroundColor: "#1e00ff" },
      closeChat: { color: "#ffffff", backgroundColor: "#0080ff" },
    });
    w.amazon_connect("snippetId", SNIPPET_ID);
    w.amazon_connect("supportedMessagingContentTypes", [
      "text/plain",
      "text/markdown",
      "application/vnd.amazonaws.connect.message.interactive",
      "application/vnd.amazonaws.connect.message.interactive.response",
    ]);
  }, []);

  return null;
}
