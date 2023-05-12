import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe
        tenetur temporibus repellat unde, modi suscipit aut animi quisquam nihil
        architecto, quia consequuntur necessitatibus esse itaque. Provident
        omnis dolor aspernatur.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe
        tenetur temporibus repellat unde, modi suscipit aut animi quisquam nihil
        architecto, quia consequuntur necessitatibus esse itaque. Provident
        omnis dolor aspernatur.
      </p>
    </div>
  );
};

export default Post;
