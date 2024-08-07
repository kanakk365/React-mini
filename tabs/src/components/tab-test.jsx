import Tabs from "./tabs"

function Random(){
  return  <div> This is some random stuff</div>
}

export default function TabsTest() {
    const tabs =[
        {
            label: 'tab1',
            content: <div> This is tab 1</div>
        },
        {
            label: 'tab2',
            content: <div> This is tab 2</div>
        },
        {
            label: 'tab3',
            content: <Random/>
        }
    ]

    function handleChange(currentTab){
        console.log(currentTab)
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}  />
}