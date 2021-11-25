import { useDispatch, useSelector } from "react-redux";

import { InputField } from "../InputField";

import styles from "./ChatWindow.module.scss";

export function Desktop() {
  const dispatch = useDispatch();

  const InputMessage = useSelector(state => state.chat.InputMessage);

  const dispatchInputMessage = (value) => {
    dispatch({
      type: "SET_InputMessage",
      payload: value
    });
  }
  
  const handleSendMessage = () => {
    if (InputMessage.length > 512) return;
  }

  return (
    <div className={styles.Main}>
      <div className={styles.Chat}>

        <div className={styles.Messages}>
          <span>тест сообщение</span>
        </div>

        <div className={styles.Send}>
          <InputField
            value={InputMessage}
            dispatchFunction={dispatchInputMessage}
            placeholder={"Напишите сообщение"}
          />

          <button></button>
        </div>

      </div>

      <div className={styles.Info}>
        это можно будет отключить
      </div>
    </div>
  )
}
