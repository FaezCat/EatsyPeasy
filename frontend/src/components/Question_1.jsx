import { Fragment } from "react"

export default function Question_1() {
  return(
    <Fragment>
      <div class="page-number-display">
        1 of 4
      </div>
      <p>

      </p>
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input type="text" placeholder="What kind of food are you craving?" name="search"></input>
      </form>
      
      {/* <Button confirm onClick={onSave}>Save</Button> */}
    </Fragment>
  )
}