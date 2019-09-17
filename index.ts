import { Command } from "commander";

export default (program: Command): Command => {
  return program.command("test").action(() => {
    console.log("test");
  });
};
