import React from 'react'
import Context from './Context';
import EditProject from './EditProject';
function SelectableProject(props) {
  let classes = props.className;
  if (props.project === props.curentProject) {
    classes += ' selected-project';
  }

  const handleClick = () => { props.changeProjectTo(props.project); }

  if (props.project === props.allProjects) {
    return (
        <button onClick={handleClick} className={classes}>{props.project.name}
        </button>
    )
  }

  return (
    <div style={{display : 'flex', justifyContent : 'space-between', alignSelf:'stretch', alignItems:'center'}}>
      <button onClick={handleClick} className={classes}>{props.project.name}
      </button>
      {
        props.project === props.curentProject &&
        <Context.Consumer> 
        {
          ({showModal}) =>
          (<button className='edit-button' onClick={() =>showModal(<EditProject project={props.project}/>)}></button>)
        }
        </Context.Consumer>
      }
    </div>
  )
}

export default SelectableProject