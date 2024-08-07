import {useState } from 'react'
import './style.css'

export default function Tabs({ tabsContent, onChange }) {

const [ currentTab , setCurrentTab] =  useState(0);
    
function handleCurrent(getIndex){
  setCurrentTab(getIndex)
  onChange(getIndex)
  
}

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabsItem ,index) => (
          <div onClick={()=>handleCurrent(index)} key={tabsItem.label}>
            <span className="label">{tabsItem.label}</span>
          </div>
        ))}
      </div>

      <div className="content">
        {
          tabsContent[currentTab] && tabsContent[currentTab].content
        }
      </div>
    </div>
  );
}
