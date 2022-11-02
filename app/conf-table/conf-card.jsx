'use client'

import { useEffect, useState } from "react";
import styles from "./conf-card.module.css"

export default function ConferenceCard({conf}) {

  return (
    <div className={styles.card}>
      <h4>
        {conf.conference_name}
      </h4>
      <p>{conf.location}</p>
      <p>{`${conf.start_date} - ${conf.end_date}`}</p>

    </div >
  )
}