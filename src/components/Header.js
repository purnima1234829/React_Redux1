import React from "react";

function Header(props) {
  console.log("home", props.data);

  return (
    <div>
      <div className="add-to-cart">
        <span className="Cart-count">{props.data.length}</span>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GG3dYtN_T1tExKvgwrNxvme0F_FhrAk0kQ&usqp=CAU" />
      </div>
    </div>
  );
}

export default Header;
