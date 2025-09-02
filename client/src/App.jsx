import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { PostsPage } from "./pages/PostsPage";
import { PostPage } from "./pages/PostPage";
import { AddPostPage } from "./pages/AddPostPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { EditPostPage } from "./pages/EditPostPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/:id/edit" element={<EditPostPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new" element={<AddPostPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
