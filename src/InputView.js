/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size = 0;
    MissionUtils.Console.readLine("", (answer) => {
      size = answer;
    });
    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let move = "";
    MissionUtils.Console.readLine("", (answer) => {
      move = answer;
    });
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let command = "";
    MissionUtils.Console.readLine("", (answer) => {
      command = answer;
    });
    return command;
  },
};

module.exports = InputView;
