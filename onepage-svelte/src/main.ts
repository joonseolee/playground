import App from "./App.svelte";
import { UserProps } from "./format/User";

const User: UserProps = {
  name: "joon",
};

const app = new App({
  target: document.body,
  props: {
    user: User,
  },
});

export default app;
