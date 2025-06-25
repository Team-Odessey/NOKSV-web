import { useState } from "react"

export const useInputBar = () => {
  const [inputData, setinputData] = useState("");
  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setinputData(e.target.value)
  }
  const resetInput = () => {
    setinputData('')
  }
  return {
    inputData,
    handleChangeInput,
    resetInput
  }
}
