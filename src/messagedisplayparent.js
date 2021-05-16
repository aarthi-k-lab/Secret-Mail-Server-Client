import QueryString from "query-string";
import { useLocation } from "react-router";
import MessageDisplay from "./messagedisplay.js";

const MessageDisplayParent = () => {
  const { search } = useLocation();
  const { rs } = QueryString.parse(search);
  return <MessageDisplay rs={rs} />;
};

export default MessageDisplayParent;
