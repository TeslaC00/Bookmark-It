import "../css/bookmarkList.css";
import React, { useState } from "react";
import { DotItemMenu } from "./DotBookmarkMenu";

function openLinkInNewTab() {
  // TODO: open the link in bookmark in new tab
  console.log("Function Called: openLinkInNewTab");
}

function getFaviconURL(): string {
  // TODO: get the favicon URL from the bookmark URL
  // https://developer.chrome.com/docs/extensions/how-to/ui/favicons
  console.log("Function Called: getFaviconURL");
  return "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Ffile-1453.html&psig=AOvVaw2wHFVuFvHRzmK7Jji4K2Lz&ust=1736171652312000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPD3vMbd3ooDFQAAAAAdAAAAABAE";
}

export interface IBookmarkItemCardProps {
  title: string;
  url: string;
}

export function BookmarkItemCard(props: IBookmarkItemCardProps) {
  const [isMenuOpnen, setIsMenuOpen] = useState(false);

  const openBookmarkDotMenu = (e: React.MouseEvent) => {
    // TODO: open 3 dot menu with bookmark options
    console.log("Function Called: openBookmarkDotMenu");
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <li className="bookmarkItem" onClick={openLinkInNewTab}>
      <div>
        <img src={getFaviconURL()} alt="" />
        <span>{props.title}</span>
      </div>
      {/* 3 dot menu */}
      <div className="bookmarkItemDotMenu" onClick={openBookmarkDotMenu}>
        <i className="bi bi-three-dots-vertical"></i>
        {isMenuOpnen && <DotItemMenu />}
      </div>
    </li>
  );
}
