import { getRandom } from "../views/helpers/helpers";

export default class Task {
  constructor(name, id, time, note, group, groupId) {
    this.name = name || "";
    this.id = id || getRandom();
    this.time = time || "";
    this.note = note || "";
    this.group = name || "";
    this.groupId = groupId || getRandom();
  }
}
