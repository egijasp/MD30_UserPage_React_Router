import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import PageNotFound from './pages/PageNotFound';
import Post from './pages/Post';
import Posts from './pages/Posts';
import User from './pages/User';
import UserPosts from './pages/UserPosts';
import Users from './pages/Users';

const App = () => (
  <div className="App">
    <header className="header">
      <nav className="nav__links">
        <Link className="link link-header" to="/">Users</Link>
        <Link className="link link-header" to="/posts">Posts</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/users/:id/user-posts" element={<UserPosts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

  </div>
);

export default App;
