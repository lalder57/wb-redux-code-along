import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Landing = () => {
    const [color, setColor] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitHandler = e => {
      e.preventDefault()

      // I need to send (dispatch) the value of 'color' to my Redux store to 
      // save it as 'favColor'

      dispatch({
        type: 'SET_COLOR',
        payload: color  // e.target.value (local state)
      })

      navigate('/home')
    }

    return (
        <form onSubmit={e => submitHandler(e)}>
          <h2>Welcome to the favorite color setter! There's a lot of complex functionality in the app, so read carefully: <br/>Enter your favorite color in the input below and watch the magic!</h2>
            <input
                placeholder="Enter your favorite color"
                onChange={e => setColor(e.target.value)}
            />
        </form>
    )
}

export default Landing
