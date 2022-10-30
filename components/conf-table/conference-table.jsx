import { useEffect, useState } from "react"
import ConferenceCard from "../conf-card/conf-card"

export default function ConferenceTable(props) {
  const [confData, setConfData]= useState([])
  
  const getData = () => {
    fetch('data.json', { 
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function (response) {
      console.log(response)
      return response.json()
    }).then(function (myJson) {
      setConfData(myJson)
    })
  }

  useEffect(() => {
    getData();
  }, []);

  const TableContents = confData.map((conf, i) => {
    
    if (i <= 20) {//TODO delete once done testing
      return (
        <ConferenceCard key={i} conf={conf} />
    )
  }""
  })

  return (
    // <h1>Conference Table</h1>
    TableContents
  )
}