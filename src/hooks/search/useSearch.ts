import { useState } from "react"

export const useSearch = () => {
  const [searchData, setSearchData] = useState("");
  const handleChangeSearchInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value)
  }
  return {
    searchData,
    handleChangeSearchInput
  }
}
