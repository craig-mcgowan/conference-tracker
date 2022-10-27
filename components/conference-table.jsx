import { useEffect, useState } from "react"

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

  const TableContents = confData.map((conf) => {
    return (
      <div key={conf.id}>
        <span>{conf.conference_name}</span>
      </div>
    )
  })

  return (
    // <h1>Conference Table</h1>
    TableContents
  )
}