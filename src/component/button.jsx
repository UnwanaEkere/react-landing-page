import React from 'react'
// import '../styles/button.css'

function Button({myBg, textcolor, mypadding, text, myborder, mymargin, myborderradius}) {
    const MyButton = {
        backgroundColor: myBg,
        color: textcolor,
        padding: mypadding,
        border: myborder,
        margin : mymargin,
        borderRadius:myborderradius,
        cursor : 'pointer',
      }
  
  
    return (
    <>
    <div>
        <button style={MyButton} type='submit'>{text}</button>
        </div>
    </>
  )
}

export default Button