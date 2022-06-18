import React from 'react'
import Modal from './Modal';

function SelectableProject(props) {
  let classes = props.className;
  if (props.project === props.curentProject) {
    classes += ' selected-project';
  }

  const handleClick = () => { props.changeProjectTo(props.project); }

  if (props.project === props.allProjects) {
    return (
        <button onClick={handleClick} className={classes}>{props.project.projectName}
        </button>
    )
  }
  return (
    <div style={{display : 'flex', justifyContent : 'space-between', alignSelf:'stretch', alignItems:'center'}}>
      <button onClick={handleClick} className={classes}>{props.project.projectName}
      </button>
      {
        props.project === props.curentProject &&
        <button className='exit-button'></button>
      }
    </div>
  )
}

export default SelectableProject