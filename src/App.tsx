// import Popup from "./Popup";

// export default function App () {
//   return <Popup/>
// }

import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import BookmarkList from "./components/BookmarkList";

function App() {
  function addCurrentTab() {
    // TODO: Add current tab to bookmarks list in root folder
    console.log("Function Called: addCurrentTab");
  }
  return (
    <>
      <h1>Bookmarks</h1>
      <BookmarkList />
      <div id="addCurrentTab">
        <button id="addCurrentTabButton" onClick={addCurrentTab}>
          <i className="bi bi-plus"></i>
          Add Current tab
        </button>
      </div>
      {/*
       * heading
       * seach box * extra buttons
       * new folder (header)
       * folder
       *   * folder icon * folder name * count of bookmarks in it * 3 dot menu
       *   * 3 dot menu
       *     * open all * open all in new window * open all in new tab group * move to folder
       *     * rename * delete
       * bookmarks
       *   * website icon * website title * 3 dot menu
       *   * 3 dot menu
       *     * open in new tab * open in new window * edit bookmark * move to folder * delete
       *     * edit bookmark (new popup)
       *       * Heading (Edit Bookmark)
       *       * Name * text box
       *       * URL * text box
       *       * Sub Heading (All Bookmarks folders)
       *       * arrow if in sub folder? (goes back to parent) * bookmark folders list
       *         * folder icon * folder name * arrow if sub folders?
       *         * arrow (click) -> open folder in bookmark folders list
       *       * new folder * cancel * save
       * add current tab (footer)
       */}
    </>
  );
}

export default App;
