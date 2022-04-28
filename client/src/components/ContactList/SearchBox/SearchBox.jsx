import "./SearchBox.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {} from "@fortawesome/free-regular-svg-icons"


const SearchBox = () => {

  const submitHandler = (event)=>{
    event.preventDefault();
  }
  
  return (
    <div className="container-fluid p-0 ">
       <div className="row">
          <div className="col search-box-container">
            <form onSubmit={submitHandler}>

               <div className="search-box">

               <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>

               <input type="search" name="search" id="search" placeholder="Search or start new chat " />
               </div>
               
            </form>
          </div>
       </div>
    </div>
  )
}

export default SearchBox