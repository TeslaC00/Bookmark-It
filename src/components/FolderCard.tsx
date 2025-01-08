import "../css/bookmarkList.css";
import React, { useState } from "react";
import { DotFolderMenu } from "./DotFolderMenu";

function changeCurrentFolder() {
  // TODO: change current folder to this clicked folder
  console.log("Function Called: changeCurrentFolder");
}

export interface IBookmarkFolderCardProps {
  title: string;
  count: number;
}

export function BookmarkFolderCard(props: IBookmarkFolderCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openFolderDotMenu = (e: React.MouseEvent) => {
    // TODO: open 3 dot menu with folder options
    console.log("Function Called: openFolderDotMenu");
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <li className="bookmarkItem" onClick={changeCurrentFolder}>
      <div className="bookmarkItemIcons">
        <i className="bi bi-folder2"></i>
        <span>{props.title}</span>
        <span>({props.count})</span>
      </div>
      {/* TODO-FIX: when clicking the dot menu the list item onClick is also called */}
      {/* 3 dot menu */}
      <div className="bookmarkItemDotMenu" onClick={openFolderDotMenu}>
        <i className="bi bi-three-dots-vertical"></i>
        {isMenuOpen && <DotFolderMenu />}
      </div>
    </li>
  );
}
