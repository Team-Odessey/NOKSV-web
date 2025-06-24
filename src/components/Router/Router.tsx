import Layout from '@src/components/common/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '@src/pages/MainPage'
import NotificationPage from '@src/pages/NotificationPage'
import NotificationDetail from '@src/pages/NotificationPage/NotificationDetail'
import ProfilePage from '@src/pages/ProfilePage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/notification' element={<NotificationPage/>}/>
          <Route path='/notification/:id' element={<NotificationDetail/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/profile/:id' element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router