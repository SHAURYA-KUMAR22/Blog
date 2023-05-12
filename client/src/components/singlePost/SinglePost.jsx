import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Shaurya</b>
          </span>

          <span className="singlePostDate">
            <b>1 hour ago</b>
          </span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem neque numquam ut assumenda aperiam amet incidunt beatae,
            odit laboriosam sequi tenetur necessitatibus reiciendis nisi.
            Corrupti cum accusantium ipsa dolores odio praesentium velit
            accusamus dolorem exercitationem excepturi rem iusto perferendis
            minus obcaecati, nobis nulla! Sed quasi repellendus excepturi
            ratione. Eligendi.
          </p>
      </div>
    </div>
  );
}
