
import Message from "../components/message";
import { useApiData } from "../hooks/data";
import Card from '/Users/noarapoport/Desktop/noble_prize_noa_2/components/card.js';


// Our main page. Here we are loading data "on the client"
// And showing some loading screen(s) while waiting for the data to be ready
export default function IndexPage() {

  const { data, isLoading, isError } = useApiData();

  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  // Just for convenience
  const records = data.nobelPrizes;
  
  
  return (
    <>
    <div className="row">
      {records.map(record => { 
        // console.log("record")
        // console.log(record)
        return <Card key = {record.laureates[0].id} title = {record.category.en} subtitle = {record.laureates[0].id} 
         sum = {record.prizeAmount} year ={record.awardYear} />
        //TODO : record.laureates[0].fullName.en
        //TypeError: Cannot read properties of undefined (reading 'en')
        
      })}
    </div>
  </>
  )
}
