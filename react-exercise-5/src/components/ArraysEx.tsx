import { isJSDocThisTag } from "typescript";
import { workerData } from "worker_threads";

export const colors: string[] = ["red", "yellow", "green"];

function ColorsList(colors: string[]) {
  return (
    <li>
    colors.map((color) => <li>{colors}</li>)
</li>)
}

export default ColorsList;

// VSC crashed and I lost most of my work... Just committing what I could before class. Sorry about that...