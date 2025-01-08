import React, { useState } from "react";
import { EditBookmarkMenu } from "./EditBookmarkMenu";
import "../css/dotMenu.css";

function openInNewTab() {
  // TODO: open bookmark in new tab
  console.log("Function Called: openInNewTab");
}

function openInNewWindow() {
  // TODO: open bookmark in new window
  console.log("Function Called: openInNewWindow");
}

function deleteBookmark() {
  // TODO: delete bookmark
  console.log("Function Called: deleteBookmark");
}

export interface IDotItemMenuProps {}

export function DotItemMenu(_: IDotItemMenuProps) {
  const [isEditMenu, setIsEditMenu] = useState(false);

  const openEditBookmark = (e: React.MouseEvent) => {
    // TODO: open Edit bookmark menu
    console.log("Function Called: openEditBookmark");

    e.stopPropagation();
    setIsEditMenu((prev) => !prev);
  };
  return (
    <div className="dotMenu">
      <ul>
        <li onClick={openInNewTab}>Open in new tab</li>
        <li onClick={openInNewWindow}>Open in new window</li>
        <li onClick={openEditBookmark}>Edit bookmark</li>
        <li onClick={deleteBookmark}>Delete</li>
      </ul>
      {/* TODO: place this edit menu on top of this UI */}
      {isEditMenu && <EditBookmarkMenu />}
    </div>
  );
}
