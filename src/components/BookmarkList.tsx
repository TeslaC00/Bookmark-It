import "../css/bookmarkList.css";
import { BookmarkItemCard } from "./BookmarkCard";
import { BookmarkFolderCard } from "./FolderCard";

export interface IBookmarkListProps {}

export default function BookmarkList(_: IBookmarkListProps) {
  function newFolder() {
    // TODO: add new folder to the bookmarkList
    console.log("Function Called: newFolder");
  }

  // TODO: add function to get bookmarks
  const bookmarks = [
    { id: 1, type: "FOLDER", count: 1, title: "Google" },
    { id: 2, type: "FOLDER", count: 2, title: "Facebook" },
    { id: 3, type: "FOLDER", count: 5, title: "Twitter" },
    {
      id: 4,
      type: "BOOKMARK",
      title: "Monkeytype",
      url: "https://monkeytype.com/",
    },
    {
      id: 5,
      type: "BOOKMARK",
      title: "Arch Rice CFG",
      url: "https://github.com/maxhu08/dotfiles",
    },
    {
      id: 6,
      type: "BOOKMARK",
      title: "How I make Windows look good - YouTube",
      url: "https://www.youtube.com/watch?v=G0_wVLhI-Ds",
    },
  ];

  return (
    <div id="bookmarkListContainer">
      <ul id="bookmarkList">
        {/* New Folder */}
        <li
          key="newFolder"
          id="newFolder"
          className="bookmarkItem"
          onClick={newFolder}
        >
          <i className="bi bi-plus"></i>
          New Folder
        </li>

        {/* Render Bookmark List Items */}
        {bookmarks.map((bookmark) => {
          {
            return bookmark.type === "FOLDER" ? (
              <BookmarkFolderCard
                key={bookmark.id}
                title={bookmark.title}
                count={bookmark.count ?? 0}
              />
            ) : (
              <BookmarkItemCard
                key={bookmark.id}
                title={bookmark.title}
                url={bookmark.url!}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}
