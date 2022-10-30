import { useEffect, useState } from "react";
import styles from "./conf-card.module.css"

export default function ConferenceCard(props) {

  return (
    <div className={styles.card}>
      <p>
        {props.conf.conference_name}
      </p>

    </div >
  )
}